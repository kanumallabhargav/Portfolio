package com.bhargavk.portfolio.service;

import com.bhargavk.portfolio.entity.WeeklyStats;
import com.bhargavk.portfolio.repository.StatsRepository;
import com.bhargavk.portfolio.repository.WeeklyStatsRepository;
import com.bhargavk.portfolio.util.Constants;
import com.bhargavk.portfolio.util.DateUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReportsService {

    private final WeeklyStatsRepository weeklyStatsRepository;
    private final StatsRepository statsRepository;

    @Transactional
    public void updateWeeklyReport() {

        List<Integer> maxCounterValue = weeklyStatsRepository.getLastUpdatedWeek();

        if(maxCounterValue.getFirst()!=null &&
                DateUtils.getCurrentWeek() > maxCounterValue.getFirst()+1) {

            log.info("Updating weekly stats now...");

            WeeklyStats weeklyStats = new WeeklyStats();
            Map<String, String> requiredWeekDates = DateUtils.getWeekInfo(DateUtils.getCurrentWeek()-1);

            //Set all values
            weeklyStats.setWeek(DateUtils.getCurrentWeek()-1);
            weeklyStats.setStartDate(LocalDate.parse(requiredWeekDates.get(Constants.MONDAY)));
            weeklyStats.setEndDate(LocalDate.parse(requiredWeekDates.get(Constants.SUNDAY)));
            weeklyStats.setTotalGain(statsRepository.getWeeklyGain(weeklyStats.getStartDate()));
            weeklyStats.setTotalSpent(statsRepository.getWeeklySpent(weeklyStats.getStartDate()));
            weeklyStats.setTotalDeficit(Constants.WEEKLY_LIMIT - (statsRepository.getWeeklyNetGains(weeklyStats.getStartDate())));
            weeklyStats.setWeeklyLoss((double) statsRepository.getWeeklyDeficit(weeklyStats.getStartDate()) / Constants.KILO_CALS);

            weeklyStatsRepository.save(weeklyStats);
            log.info("Stats updated for week: {}", DateUtils.getCurrentWeek());
        }
        log.info("Stats will be updated at the beginning of a new week.");
    }

    public List<WeeklyStats> allWeeks() {
        return weeklyStatsRepository.findAll();
    }
}

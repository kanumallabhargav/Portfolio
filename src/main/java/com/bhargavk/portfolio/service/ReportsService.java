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
import java.util.HashMap;
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

            if(!statsRepository.getLastUpdatedDate().equals(DateUtils.yesterday())) {
                log.warn("Yesterday's stats are not updated.");
                log.warn("Update yesterday's stats and restart the application.");
                return;
            }

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
            return;
        }
        log.info("Skipping weekly stat update...");
        log.info("Stats will be updated at the beginning of a new week.");
    }

    public List<WeeklyStats> allWeeks() {
        return weeklyStatsRepository.findAll();
    }

    public Map<String, Integer> getCurrentWeekProgress() {
        Map<String, String> requiredWeekDates = DateUtils.getWeekInfo(DateUtils.getCurrentWeek());
        LocalDate startDate = LocalDate.parse(requiredWeekDates.get(Constants.MONDAY));

        int currentDividend = statsRepository.getCurrentWeekDividend(startDate);
        int currentLimit = (Constants.WEEKLY_LIMIT/7) * currentDividend;
        int currentGain = statsRepository.getWeeklyGain(startDate);
        int remainingGain = Constants.WEEKLY_LIMIT - currentGain;

        Map<String, Integer> currentWeekProgressMap = new HashMap<>();
        currentWeekProgressMap.put(Constants.CURRENT_GAIN, currentGain);
        currentWeekProgressMap.put(Constants.GAIN_LIMIT, currentLimit);
        currentWeekProgressMap.put(Constants.CURRENT_SPENT, statsRepository.getWeeklySpent(startDate));
        currentWeekProgressMap.put(Constants.REMAINING_GAIN, remainingGain);
        currentWeekProgressMap.put(Constants.DAILY_LIMIT, remainingGain/calculateDenominator(currentDividend));

        return currentWeekProgressMap;
    }

    private int calculateDenominator(int currentDividend) {
        return currentDividend == 7 ? 1 : 7 - currentDividend;
    }
}

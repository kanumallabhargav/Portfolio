package com.bhargavk.portfolio.service;

import com.bhargavk.portfolio.dto.DeficitTrendDTO;
import com.bhargavk.portfolio.dto.GainSpendTrendDTO;
import com.bhargavk.portfolio.dto.LastThirtyDaysSpends;
import com.bhargavk.portfolio.dto.NetGainChartDTO;
import com.bhargavk.portfolio.repository.StatsRepository;
import com.bhargavk.portfolio.util.DateUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ChartsService {
    private final StatsRepository statsRepository;

    public List<DeficitTrendDTO> getDeficitTrends(LocalDate startDate) {
        List<GainSpendTrendDTO> rawGains = statsRepository.getGainSpendTrendData(startDate);
        List<DeficitTrendDTO> deficitTrendDTOS = new ArrayList<>();

        for (int i = 0; i <= rawGains.size() - 1; i++) {
            deficitTrendDTOS.add(new DeficitTrendDTO(rawGains.get(i).statDate(), 2500 - (rawGains.get(i).gains() - rawGains.get(i).spends())));
        }

        return deficitTrendDTOS;
    }

    public List<GainSpendTrendDTO> getGainSpendTrendData(LocalDate startDate) {
        return statsRepository.getGainSpendTrendData(startDate);
    }

    public int getTflValue() {

        int totalGains = statsRepository.getAllGains()
                .stream()
                .mapToInt(Integer::intValue)
                .sum();

        int totalSpent = statsRepository.getAllSpent()
                .stream()
                .mapToInt(Integer::intValue)
                .sum();

        int currentDayCounter = (int) statsRepository.getTotalRows();
        int requiredIntake = (2500 * currentDayCounter);
        return requiredIntake - (totalGains - totalSpent);
    }

    public List<NetGainChartDTO> calcNetGains(LocalDate startDate) {
        List<GainSpendTrendDTO> trends = statsRepository.getGainSpendTrendData(startDate);

        List<NetGainChartDTO> toReturn = new ArrayList<>();
        for (int i = 0; i <= trends.size() - 1; i++) {
            toReturn.add(
                    new NetGainChartDTO(
                            trends.get(i).statDate(),
                            trends.get(i).gains() - trends.get(i).spends()
                    )
            );
        }
        return toReturn;
    }

    public List<LastThirtyDaysSpends> getAllOneMonthSpends() {
        return statsRepository.getAllSpent(DateUtils.thirtyDaysAgo());
    }
}

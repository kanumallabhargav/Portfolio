package com.bhargavk.portfolio.service;

import com.bhargavk.portfolio.dto.DeficitTrendDTO;
import com.bhargavk.portfolio.dto.GainSpendTrendDTO;
import com.bhargavk.portfolio.dto.NetGainChartDTO;
import com.bhargavk.portfolio.repository.StatsRepository;
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

    public List<DeficitTrendDTO> getDeficitTrends() {
        List<GainSpendTrendDTO> rawGains = statsRepository.getGainSpendTrendData(LocalDate.of(2026, 8, 1));
        List<DeficitTrendDTO> deficitTrendDTOS = new ArrayList<>();

        for (int i = 0; i <= rawGains.size() - 1; i++) {
            deficitTrendDTOS.add(new DeficitTrendDTO(rawGains.get(i).statDate(), 2500 - (rawGains.get(i).gains() - rawGains.get(i).spends())));
        }

        return deficitTrendDTOS;
    }

    public List<GainSpendTrendDTO> getGainSpendTrendData() {
        return statsRepository.getGainSpendTrendData(LocalDate.of(2026, 8, 1));
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

    public List<NetGainChartDTO> calcNetGains() {
        List<GainSpendTrendDTO> trends = statsRepository.getGainSpendTrendData(LocalDate.of(2026, 8, 1));

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
}

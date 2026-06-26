package com.bhargavk.portfolio.service;

import com.bhargavk.portfolio.dto.GainSpendTrendDTO;
import com.bhargavk.portfolio.dto.NetGainChartDTO;
import com.bhargavk.portfolio.repository.StatsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class ChartsService {
    private final StatsRepository statsRepository;

    public Map<LocalDate, Integer> getDeficitTrends() {
        List<GainSpendTrendDTO> rawGains = statsRepository.getGainSpendTrendData();

        Map<LocalDate, Integer> trendMap = new HashMap<>();

        for( int i =0; i<= rawGains.size()-1; i++) {
            trendMap.put(rawGains.get(i).statDate(), 2500 - (rawGains.get(i).gains()-rawGains.get(i).spends()));
        }

        return trendMap;
    }

    public List<GainSpendTrendDTO> getGainSpendTrendData() {
        return statsRepository.getGainSpendTrendData();
    }

    public int getTflValue() {

        int totalGains =  statsRepository.getAllGains()
                .stream()
                .mapToInt(Integer::intValue)
                .sum();

        int totalSpent =  statsRepository.getAllSpent()
                .stream()
                .mapToInt(Integer::intValue)
                .sum();

        int currentDayCounter = (int) statsRepository.getTotalRows();
        int requiredIntake = (int) (2500 * currentDayCounter);
        return requiredIntake - (totalGains-totalSpent);
    }

    public List<NetGainChartDTO> calcNetGains() {
        List<GainSpendTrendDTO> trends = statsRepository.getGainSpendTrendData();

        List<NetGainChartDTO> toReturn = new ArrayList<>();
        for(int i=0; i<= trends.size()-1;i++) {
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

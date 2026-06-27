package com.bhargavk.portfolio.service;

import com.bhargavk.portfolio.dto.StatsDTO;
import com.bhargavk.portfolio.entity.Stats;
import com.bhargavk.portfolio.repository.StatsRepository;
import com.bhargavk.portfolio.util.Constants;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class StatsService {

    private final StatsRepository statsRepository;

    public List<StatsDTO> getAllStats() {
        return statsRepository.findAll()
                .stream()
                .map(StatsDTO::fromEntity)
                .toList();
    }

    @Transactional
    public void saveStat(Stats stats) {
        int netGain = stats.getGain() - stats.getSpent();
        int totalDeficit = Constants.bmr - netGain;
        stats.setNetGain(netGain);
        stats.setTotalDeficit(totalDeficit);
        statsRepository.save(stats);
    }

    public List<Integer> getAllGains() {
        return statsRepository.getAllGains();
    }

    public List<Integer> getAllSpends() {
        return statsRepository.getAllSpent();
    }
}

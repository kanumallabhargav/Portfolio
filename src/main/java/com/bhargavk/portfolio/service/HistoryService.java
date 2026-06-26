package com.bhargavk.portfolio.service;

import com.bhargavk.portfolio.dto.HistoryDTO;
import com.bhargavk.portfolio.entity.History;
import com.bhargavk.portfolio.entity.Stats;
import com.bhargavk.portfolio.repository.HistoryRepository;
import com.bhargavk.portfolio.repository.StatsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class HistoryService {
    private final HistoryRepository historyRepository;
    private final StatsRepository statsRepository;

    public List<HistoryDTO> getAllHistory() {
        return historyRepository.findAll()
                .stream()
                .map(HistoryDTO::fromEntity)
                .toList();
    }

    @Transactional
    public void saveHistoryItem(Stats stats) {

        int currentDayCounter = (int) statsRepository.getTotalRows();
        int requiredIntake = (int) (2500 * currentDayCounter);
        int totalSpent = addListItems(statsRepository.getAllSpent());
        int totalGains = addListItems(statsRepository.getAllGains());
        int totalFatLoss = requiredIntake - (totalGains-totalSpent);
        double currentLoss = (double) totalFatLoss /7700;
        double remainingLoss = 10 - currentLoss;

        History history = new History();
        history.setStatDate(stats.getStatDate());
        history.setTotalFatLoss(totalFatLoss);
        history.setCurrentLoss(currentLoss);
        history.setRemainingLoss(remainingLoss);
        history.setEta(((double) (77000 * currentDayCounter) /totalFatLoss)-13);

        historyRepository.save(history);
    }

    private int addListItems(List<Integer> allItems) {
        return allItems
                .stream()
                .mapToInt(Integer::intValue)
                .sum();

    }
}

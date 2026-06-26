package com.bhargavk.portfolio.dto;

import com.bhargavk.portfolio.entity.History;

import java.time.LocalDate;

public record HistoryDTO(
        Long id,
        Integer totalFatLoss,
        double currentLoss,
        double remainingLoss,
        double eta,
        LocalDate statDate
) {
    public static HistoryDTO fromEntity(History history) {
        return new HistoryDTO(
                history.getId(),
                history.getTotalFatLoss(),
                history.getCurrentLoss(),
                history.getRemainingLoss(),
                history.getEta(),
                history.getStatDate()
        );
    }
}

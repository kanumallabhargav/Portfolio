package com.bhargavk.portfolio.dto;

public record CurrentWeekProgressDTO(
        Integer currentGain,
        Integer gainLimit,
        Integer currentSpent,
        Integer remainingGain,
        Integer dailyLimit
) {
}

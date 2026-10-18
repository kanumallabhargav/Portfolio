package com.bhargavk.portfolio.dto;

import com.bhargavk.portfolio.entity.Stats;

import java.time.LocalDate;

public record StatsDTO(
        Long id,
        Integer gain,
        Integer spent,
        Integer protein,
        Integer netGain,
        Integer totalDeficit,
        LocalDate statDate


) {
    public static StatsDTO fromEntity(Stats stats) {
        return new StatsDTO(
                stats.getId(),
                stats.getGain(),
                stats.getSpent(),
                stats.getProtein(),
                stats.getNetGain(),
                stats.getTotalDeficit(),
                stats.getStatDate()
        );
    }
}

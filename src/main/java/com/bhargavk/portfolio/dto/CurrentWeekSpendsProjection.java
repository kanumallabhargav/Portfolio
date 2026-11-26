package com.bhargavk.portfolio.dto;

import java.time.LocalDate;

public record CurrentWeekSpendsProjection(
        LocalDate statDate,
        Integer spent
) {
}

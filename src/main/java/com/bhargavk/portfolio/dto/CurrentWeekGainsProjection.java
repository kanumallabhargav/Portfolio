package com.bhargavk.portfolio.dto;

import java.time.LocalDate;

public record CurrentWeekGainsProjection(
        LocalDate statDate,
        Integer gain
) {
}

package com.bhargavk.portfolio.dto;

import java.time.LocalDate;

public record LastThirtyDaysSpendsDTO(
        LocalDate statDate,
        Integer spent
) {
}

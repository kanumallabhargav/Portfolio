package com.bhargavk.portfolio.dto;

import java.time.LocalDate;

public record LastThirtyDaysSpends(
        LocalDate statDate,
        Integer spent
) {
}

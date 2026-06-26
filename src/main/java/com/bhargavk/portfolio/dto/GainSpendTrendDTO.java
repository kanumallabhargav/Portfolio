package com.bhargavk.portfolio.dto;

import java.time.LocalDate;

public record GainSpendTrendDTO(
        LocalDate statDate,
        Integer gains,
        Integer spends
) {
}

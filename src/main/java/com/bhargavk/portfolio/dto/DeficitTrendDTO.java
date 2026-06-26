package com.bhargavk.portfolio.dto;

import java.time.LocalDate;

public record DeficitTrendDTO(
        LocalDate statDate,
        Integer deficit
) {
}

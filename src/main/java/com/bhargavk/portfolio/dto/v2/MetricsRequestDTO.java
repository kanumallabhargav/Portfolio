package com.bhargavk.portfolio.dto.v2;

import java.time.LocalDate;

public record MetricsRequestDTO(
        LocalDate date,
        Integer gain,
        Integer spent,
        Integer protein,
        String notes
) {
}

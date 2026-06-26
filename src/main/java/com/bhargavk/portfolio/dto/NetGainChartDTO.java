package com.bhargavk.portfolio.dto;

import java.time.LocalDate;

public record NetGainChartDTO(
        LocalDate name,
        Integer netGain
) {
}

package com.bhargavk.portfolio.dto;

import lombok.Getter;

@Getter
public class TflGoalChartDTO {

    private String label;
    private int x;

    public TflGoalChartDTO(String label, int x) {
        this.label = label;
        this.x = x;
    }
}

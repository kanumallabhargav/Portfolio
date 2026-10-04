package com.bhargavk.portfolio.controller;

import com.bhargavk.portfolio.entity.WeeklyStats;
import com.bhargavk.portfolio.service.ReportsService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api/reports")
public class ReportsController {
    private final ReportsService reportsService;

    @GetMapping("/list")
    public List<WeeklyStats> allHistory() {
        return reportsService.allWeeks();
    }
}

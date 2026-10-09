package com.bhargavk.portfolio.controller;

import com.bhargavk.portfolio.dto.CurrentWeekProgressDTO;
import com.bhargavk.portfolio.entity.WeeklyStats;
import com.bhargavk.portfolio.service.ReportsService;
import com.bhargavk.portfolio.util.Constants;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

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

    @GetMapping("/progress")
    public ResponseEntity<CurrentWeekProgressDTO> getCurrentWeekProgress() {
        Map<String, Integer> currentWeekProgressStats = reportsService.getCurrentWeekProgress();
        return ResponseEntity.ok().body(
                new CurrentWeekProgressDTO(
                        currentWeekProgressStats.get(Constants.CURRENT_GAIN),
                        currentWeekProgressStats.get(Constants.GAIN_LIMIT),
                        currentWeekProgressStats.get(Constants.CURRENT_SPENT),
                        currentWeekProgressStats.get(Constants.REMAINING_GAIN),
                        currentWeekProgressStats.get(Constants.DAILY_LIMIT)
                )
        );
    }
}

package com.bhargavk.portfolio.controller;

import com.bhargavk.portfolio.dto.*;
import com.bhargavk.portfolio.service.ChartsService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api/charts")
public class ChartsController {
    private final ChartsService chartsService;

    @GetMapping("/gain-spend/{startDate}")
    public ResponseEntity<List<GainSpendTrendDTO>> getGainSpendData(@PathVariable String startDate) {
        return ResponseEntity.ok(
                chartsService.getGainSpendTrendData(LocalDate.parse(startDate))
        );
    }

    @GetMapping("/deficit-trends/{startDate}")
    public ResponseEntity<List<DeficitTrendDTO>> getDeficitTrends(@PathVariable String startDate) {
        return ResponseEntity.ok().body(chartsService.getDeficitTrends(LocalDate.parse(startDate)));
    }

    @GetMapping("/tfl-goal")
    public List<TflGoalChartDTO> getTflGoal() {
        int completed = chartsService.getTflValue();
        return List.of(
                new TflGoalChartDTO("tfl", completed),
                new TflGoalChartDTO("tfl", 77000-completed)
        );
    }

    @GetMapping("/net-gain/{startDate}")
    public List<NetGainChartDTO> getNetGain(@PathVariable String startDate) {
        return chartsService.calcNetGains(LocalDate.parse(startDate));
    }

    @GetMapping("/last-thirty-days")
    public List<LastThirtyDaysSpendsDTO> getPreviousThirtyDatsSpent() {
        return chartsService.getAllOneMonthSpends();
    }
}

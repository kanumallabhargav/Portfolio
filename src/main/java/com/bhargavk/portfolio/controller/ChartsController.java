package com.bhargavk.portfolio.controller;

import com.bhargavk.portfolio.dto.DeficitTrendDTO;
import com.bhargavk.portfolio.dto.GainSpendTrendDTO;
import com.bhargavk.portfolio.dto.NetGainChartDTO;
import com.bhargavk.portfolio.dto.TflGoalChartDTO;
import com.bhargavk.portfolio.service.ChartsService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api/charts")
public class ChartsController {
    private final ChartsService chartsService;

    @GetMapping("/gain-spend")
    public ResponseEntity<List<GainSpendTrendDTO>> getGainSpendData() {
        return ResponseEntity.ok(
                chartsService.getGainSpendTrendData()
        );
    }

    @GetMapping("/deficit-trends")
    public ResponseEntity<List<DeficitTrendDTO>> getDeficitTrends() {
        List<DeficitTrendDTO> response = new java.util.ArrayList<>(chartsService
                .getDeficitTrends()
                .entrySet()
                .stream()
                .map(
                        entry -> new DeficitTrendDTO(
                                entry.getKey(),
                                entry.getValue()
                        )

                )
                .toList());
        Collections.reverse(response);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/tfl-goal")
    public List<TflGoalChartDTO> getTflGoal() {
        int completed = chartsService.getTflValue();
        return List.of(
                new TflGoalChartDTO("tfl", completed),
                new TflGoalChartDTO("tfl", 77000-completed)
        );
    }

    @GetMapping("/net-gain")
    public List<NetGainChartDTO> getNetGain() {
        return chartsService.calcNetGains();
    }
}

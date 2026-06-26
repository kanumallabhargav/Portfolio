package com.bhargavk.portfolio.controller;

import com.bhargavk.portfolio.dto.StatsDTO;
import com.bhargavk.portfolio.entity.Stats;
import com.bhargavk.portfolio.service.HistoryService;
import com.bhargavk.portfolio.service.StatsService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api/stats")
public class StatsController {

    private final StatsService statsService;
    private final HistoryService historyService;

    @GetMapping("/list")
    public List<StatsDTO> allStats() {
        return statsService.getAllStats();
    }

    @PostMapping("/add")
    public ResponseEntity<String> createStat(@Valid @RequestBody Stats stats) {
        statsService.saveStat(stats);
        historyService.saveHistoryItem(stats);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created record");
    }
}

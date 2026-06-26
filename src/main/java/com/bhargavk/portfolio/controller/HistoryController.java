package com.bhargavk.portfolio.controller;

import com.bhargavk.portfolio.dto.HistoryDTO;
import com.bhargavk.portfolio.service.HistoryService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api/history")
public class HistoryController {
    private final HistoryService historyService;

    @GetMapping("/list")
    public List<HistoryDTO> allHistory() {
        return historyService.getAllHistory();
    }
}

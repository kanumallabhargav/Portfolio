package com.bhargavk.portfolio.controller.v2;

import com.bhargavk.portfolio.dto.StatsDTO;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api/phase2/metrics")
public class MetricsController {

    @GetMapping("/list")
    public String allStats() {
        return "working";
    }
}

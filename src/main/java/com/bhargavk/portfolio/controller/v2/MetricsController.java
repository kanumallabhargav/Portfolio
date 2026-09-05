package com.bhargavk.portfolio.controller.v2;

import com.bhargavk.portfolio.dto.v2.MetricsRequestDTO;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api/phase2/metrics")
public class MetricsController {

    @GetMapping("/list")
    public String allStats() {
        return "working";
    }

    @PostMapping("/save")
    public String saveMetric(@Valid @RequestBody MetricsRequestDTO metricsRequestDTO) {



        return metricsRequestDTO.date() + metricsRequestDTO.notes() + metricsRequestDTO.gain();
    }
}

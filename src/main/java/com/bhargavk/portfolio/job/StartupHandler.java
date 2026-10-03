package com.bhargavk.portfolio.job;

import com.bhargavk.portfolio.service.ReportsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class StartupHandler {
    private final ReportsService reportsService;

    @EventListener(ApplicationReadyEvent.class)
    public void weeklyReportEvent() {
        log.info("Checking for weekly report condition...");
        reportsService.updateWeeklyReport();
    }
}

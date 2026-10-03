package com.bhargavk.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.IsoFields;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/weeks")
    public String testWeeks() {
        LocalDate date = LocalDate.of(2026, 2, 17);

        LocalDate firstDay = LocalDate.of(date.getYear(), date.getMonth(), date.getDayOfMonth())
                .with(IsoFields.WEEK_OF_WEEK_BASED_YEAR, date.get(IsoFields.WEEK_OF_WEEK_BASED_YEAR))
                .with(DayOfWeek.MONDAY);

        LocalDate lastDay = firstDay.plusDays(6);
        String dayOfWeekFirst = String.valueOf(firstDay.getDayOfWeek());
        String dayOfWeekLast = String.valueOf(lastDay.getDayOfWeek());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("ddMMyy");

        return dayOfWeekFirst + ", " + firstDay.format(formatter) + " - " + dayOfWeekLast + ", " + lastDay.format(formatter);
    }
}

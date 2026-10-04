package com.bhargavk.portfolio.util;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.IsoFields;
import java.util.HashMap;
import java.util.Map;

public class DateUtils {

    public static LocalDate getCurrentDate() {
        return LocalDate.now();
    }

    public static LocalDate yesterday() {
        return getCurrentDate().minusDays(1);
    }

    public static int getCurrentWeek() {
        return getCurrentDate().get(IsoFields.WEEK_OF_WEEK_BASED_YEAR);
    }

    public static Map<String, String> getWeekInfo(int weekOfYear) {

        int currentYear = LocalDate.now().getYear();

        LocalDate firstDay = LocalDate.of(currentYear, 1, 4)
                .with(IsoFields.WEEK_OF_WEEK_BASED_YEAR, weekOfYear)
                .with(DayOfWeek.MONDAY);

        LocalDate lastDay = firstDay.plusDays(6);

        DateTimeFormatter formatter =
                DateTimeFormatter.ofPattern(Constants.DATE_FORMAT);

        Map<String, String> weekMap = new HashMap<>();
        weekMap.put(Constants.MONDAY, firstDay.format(formatter));
        weekMap.put(Constants.SUNDAY, lastDay.format(formatter));

        return weekMap;
    }
}

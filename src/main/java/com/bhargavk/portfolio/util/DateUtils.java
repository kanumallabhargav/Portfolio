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

    public static int getCurrentWeek() {
        return getCurrentDate().get(IsoFields.WEEK_OF_WEEK_BASED_YEAR);
    }

    public static Map<String, String> getWeekInfo(LocalDate sourceDate) {
        LocalDate firstDay = LocalDate.of(sourceDate.getYear(), sourceDate.getMonth(), sourceDate.getDayOfMonth())
                .with(IsoFields.WEEK_OF_WEEK_BASED_YEAR, sourceDate.get(IsoFields.WEEK_OF_WEEK_BASED_YEAR))
                .with(DayOfWeek.MONDAY);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(Constants.DATE_FORMAT);
        LocalDate lastDay = firstDay.plusDays(6);

        Map<String, String> weekMap = new HashMap<>();
        weekMap.put(Constants.MONDAY, firstDay.format(formatter));
        weekMap.put(Constants.SUNDAY, lastDay.format(formatter));
        return weekMap;
    }
}

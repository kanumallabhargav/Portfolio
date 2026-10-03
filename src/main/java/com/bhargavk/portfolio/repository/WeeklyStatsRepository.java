package com.bhargavk.portfolio.repository;

import com.bhargavk.portfolio.entity.WeeklyStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WeeklyStatsRepository extends JpaRepository<WeeklyStats, Long> {

    @Query("SELECT max(s.week) FROM WeeklyStats s")
    List<Integer> getLastUpdatedWeek();
}

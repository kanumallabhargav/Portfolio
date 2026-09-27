package com.bhargavk.portfolio.repository;

import com.bhargavk.portfolio.dto.GainSpendTrendDTO;
import com.bhargavk.portfolio.entity.Stats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface StatsRepository extends JpaRepository<Stats, Long> {

    @Query("SELECT s.gain FROM Stats s")
    List<Integer> getAllGains();

    @Query("SELECT s.spent FROM Stats s")
    List<Integer> getAllSpent();

    @Query("SELECT s.totalDeficit FROM Stats s")
    List<Integer> getAllDeficits();

    @Query("SELECT count(s) from Stats s")
    long getTotalRows();

    @Query("""
                SELECT s.statDate, s.gain, s.spent
                FROM Stats s
                WHERE s.statDate >= :statDate
                            order by s.statDate
            """)
    List<GainSpendTrendDTO> getGainSpendTrendData(@Param("statDate") LocalDate statDate);
}

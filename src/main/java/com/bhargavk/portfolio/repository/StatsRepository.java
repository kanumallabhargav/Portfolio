package com.bhargavk.portfolio.repository;

import com.bhargavk.portfolio.dto.GainSpendTrendDTO;
import com.bhargavk.portfolio.entity.Stats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StatsRepository extends JpaRepository<Stats, Long> {

    @Query("SELECT s.gain FROM Stats s")
    public List<Integer> getAllGains();

    @Query("SELECT s.spent FROM Stats s")
    public List<Integer> getAllSpent();

    @Query("SELECT count(s) from Stats s")
    public long getTotalRows();

    @Query("SELECT s.statDate, s.gain, s.spent from Stats s")
    public List<GainSpendTrendDTO> getGainSpendTrendData();
}

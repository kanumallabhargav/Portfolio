package com.bhargavk.portfolio.repository;

import com.bhargavk.portfolio.entity.History;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HistoryRepository extends JpaRepository<History, Long>  {

    @Query("select h from History h order by h.statDate desc")
    List<History> findLatestHistoryRecord(Pageable pageable);
}

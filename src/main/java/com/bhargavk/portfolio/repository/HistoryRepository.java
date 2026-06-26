package com.bhargavk.portfolio.repository;

import com.bhargavk.portfolio.entity.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long>  {
}

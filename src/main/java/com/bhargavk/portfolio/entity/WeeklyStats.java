package com.bhargavk.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "weekly_stats")
public class WeeklyStats {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "week_num", nullable = false)
    private Integer week;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Column(name = "total_gain", nullable = false)
    private Integer totalGain;

    @Column(name = "total_spent", nullable = false)
    private Integer totalSpent;

    @Column(name = "deficit", nullable = false)
    private Integer totalDeficit;

    @Column(name = "weekly_loss", nullable = false)
    private double weeklyLoss;
}

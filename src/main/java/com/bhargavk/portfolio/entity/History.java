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
@Table(name = "history")
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "tfl")
    private Integer totalFatLoss;

    @Column(name = "cl")
    private double currentLoss;

    @Column(name = "rl")
    private double remainingLoss;

    @Column(name = "eta")
    private double eta;

    @Column(name = "stat_date")
    private LocalDate statDate;
}

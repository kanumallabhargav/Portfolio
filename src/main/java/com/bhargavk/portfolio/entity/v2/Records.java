package com.bhargavk.portfolio.entity.v2;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "records")
public class Records {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "total_deficit")
    private Integer totalDeficit;

    @Column(name = "current_loss", nullable = false)
    private double currentLoss;

    @Column(name = "remaining_loss", nullable = false)
    private double remainingLoss;

    @Column(name = "stat_date", nullable = false)
    private LocalDate date;
}

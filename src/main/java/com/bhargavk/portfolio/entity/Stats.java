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
@Table(name = "stats")
public class Stats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "gain")
    private Integer gain;

    @Column(name = "spent")
    private Integer spent;

    @Column(name = "protein")
    private Integer protein;

    @Column(name = "stat_date")
    private LocalDate statDate;

    @Column(name = "net_gain")
    private Integer netGain;

    @Column(name = "total_deficit")
    private Integer totalDeficit;
}

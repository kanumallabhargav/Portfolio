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
@Table(name = "metrics")
public class Metrics {

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

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "notes")
    private String notes;

    @Column(name = "net_gain")
    private Integer netGain;

    @Column(name = "deficit")
    private Integer deficit;
}

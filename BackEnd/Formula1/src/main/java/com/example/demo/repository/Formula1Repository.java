package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Formula1;

@Repository
public interface Formula1Repository extends JpaRepository<Formula1,Integer> {

}

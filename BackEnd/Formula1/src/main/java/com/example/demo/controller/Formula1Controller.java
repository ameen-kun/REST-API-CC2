package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Formula1;
import com.example.demo.service.Formula1Service;

@CrossOrigin
@RestController
public class Formula1Controller {
@Autowired
Formula1Service service;
	@GetMapping("/")
	public List<Formula1> getD(){
		return service.disp();
	}
	@PutMapping("/{id}")
	public String putD(@PathVariable int id,@RequestBody Formula1 x) {
		return service.update(id, x);
	}
	@PostMapping("/")
	public Formula1 postD(@RequestBody Formula1 x) {
		return service.push(x);
	}
	@DeleteMapping("/{id}")
	public String delD(@PathVariable int id) {
		return service.delete(id);
	}
	@GetMapping("/{id}")
	public Optional<Formula1> dispI(@PathVariable int id){
		return service.dispId(id);
	}
}

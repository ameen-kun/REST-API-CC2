package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Formula1;
import com.example.demo.repository.Formula1Repository;

@Service
public class Formula1Service {

	@Autowired
	Formula1Repository  repository;
	
	public Formula1 push(Formula1 x) {
		return repository.save(x);
	}
	public List<Formula1> disp(){
		return repository.findAll();
	}
	public Optional<Formula1> get(int id){
		return repository.findById(id);
	}
	public String update(int id,Formula1 x) {
		if(repository.existsById(id)) {
			Formula1 temp=repository.getReferenceById(id);
			temp.setId(id);
			temp.setCar(x.getCar());
			temp.setDriver(x.getDriver());
			temp.setImgcurl(x.getImgcurl());
			temp.setImgdurl(x.getImgdurl());
			temp.setTeam(x.getTeam());
			temp.setYear(x.getYear());
			repository.save(temp);
			return "updated";
		}
		return "";
	}
	public String delete(int id) {
		if(repository.existsById(id)) {
			repository.deleteById(id);
			return "Deleted";
		}
		return "";
	}
	public Optional<Formula1> dispId(int id) {
		return repository.findById(id);
	}
}

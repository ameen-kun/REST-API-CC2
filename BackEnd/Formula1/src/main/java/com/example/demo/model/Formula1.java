package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Formula1 {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private int year;
private String driver;
private String team;
private String car;
private String imgdurl;
private String imgcurl;
public Formula1() {
	super();
	// TODO Auto-generated constructor stub
}
public Formula1(int year, String driver, String team, String car, String imgdurl, String imgcurl) {
	super();
	this.year = year;
	this.driver = driver;
	this.team = team;
	this.car = car;
	this.imgdurl = imgdurl;
	this.imgcurl = imgcurl;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public int getYear() {
	return year;
}
public void setYear(int year) {
	this.year = year;
}
public String getDriver() {
	return driver;
}
public void setDriver(String driver) {
	this.driver = driver;
}
public String getTeam() {
	return team;
}
public void setTeam(String team) {
	this.team = team;
}
public String getCar() {
	return car;
}
public void setCar(String car) {
	this.car = car;
}
public String getImgdurl() {
	return imgdurl;
}
public void setImgdurl(String imgdurl) {
	this.imgdurl = imgdurl;
}
public String getImgcurl() {
	return imgcurl;
}
public void setImgcurl(String imgcurl) {
	this.imgcurl = imgcurl;
}

}
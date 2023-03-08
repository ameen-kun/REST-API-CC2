import React from "react";
import axios from "axios";
import DispCard from "./dispcard";
import { Link } from "react-router-dom";

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/')
            .then(response => {
            this.setState({ data: response.data})
        })
    }
    Handledelete=(id)=>{
        axios.delete("http://localhost:8080/"+id);
        var d=this.state.data;
        var data=d.filter((n)=>n.id!==id);
        this.setState({data});
    }
    render(){
    return(
        <div className="home-container">
            <div className="addb">
            <Link to="/form"><button id="insert">Add</button></Link>
            </div>

            {this.state.data.map((n)=>{
                return(
                    <DispCard id={n.id} Handledelete={this.Handledelete} driver={n.driver} year={n.year} team={n.team} car={n.car} img1={n.imgcurl} img2={n.imgdurl}/>
                )
            })}
            
        </div>
    )
}
}
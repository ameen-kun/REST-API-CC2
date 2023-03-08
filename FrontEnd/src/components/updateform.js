import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PutForm=(props)=>{
    const [driver,setDriver]=useState("");
    const [team,setTeam]=useState("");
    const [car,setCar]=useState("");
    const [year,setYear]=useState(0);
    const [cimg,setCimg]=useState("");
    const [dimg,setDimg]=useState("");
    const params=useParams();

    useEffect(()=>{
      axios.get("http://localhost:8080/"+params.id)
      .then(response=>{
        setDriver(response.data.driver);
        setTeam(response.data.team);
        setCar(response.data.car);
        setYear(response.data.year);
        setCimg(response.data.imgcurl);
        setDimg(response.data.imgdurl);
    });
},[])
  
    const handleSubmit=()=>{
      // e.preventDefault();
            const data={
            driver:driver,
            team:team,
            car:car,
            year:year,
            imgcurl:cimg,
            imgdurl:dimg
        }
        // console.log(data);
        axios.put("http://localhost:8080/"+params.id,data);
    }
    return(
        <div className="formcon">
        <div className="form">
        <form onSubmit={handleSubmit} action="/">
            <label>Driver:</label><br/>
            <input type="text" value={driver}
          onChange={(e) => setDriver(e.target.value)} />
          <br/><br/><label>Team:</label><br/>
          <input type="text" value={team}
          onChange={(e) => setTeam(e.target.value)} />
          <br/><br/><label>Car:</label><br/>
          <input type="text" value={car}
          onChange={(e) => setCar(e.target.value)} />
          <br/><br/><label>Year:</label><br/>
          <input type="number" value={year}
          onChange={(e) => setYear(e.target.value)} />
          <br/><br/><label>LImage :</label><br/>
          <input type="url" value={cimg}
          onChange={(e) => setCimg(e.target.value)} />
          <br/><br/><label>RImage :</label><br/>
          <input type="url" value={dimg}
          onChange={(e) => setDimg(e.target.value)} />
        <br/><br/>
        <input className="updbutt" type="submit" value="Submit"/>
        </form>
          </div>
          </div>
    )

}
export default PutForm;
import { Link } from "react-router-dom"
const DispCard=(props)=>{

    return(
        <div className="cont">
            <div className="imgc">
                <img src={props.img1} alt="Car"/>
            </div>
        <div className="details">
    <div className="imgl">
                <img src={props.img2} alt="Team"/>
            </div>
        <div className="dcont">
        <div className="dcontainer">
            <div className="dhead">DRIVER :</div> 
            <div className="dval">
            {props.driver}
            </div>
        </div>
        <div className="ycontainer">
            <div className="yhead">YEAR :</div>
            <div className="yval">
                 {props.year}
            </div>
        </div>
        <div className="tcontainer">
            <div className="thead">TEAM : </div>
            <div className="tval">
            {props.team}
            </div>
            </div>
        <div className="ccontainer">
            <div className="chead">CAR : </div>
            <div className="cval">
            {props.car}
            </div>
        </div>
    </div>
    <div className="editkeys">
    <button id="delete" onClick={()=>{props.Handledelete(props.id)}}>Delete</button>
    <Link to={"upd/"+props.id}><button id="update">Update</button></Link>
    </div>
    </div>
    </div>
    )
}
export default DispCard;
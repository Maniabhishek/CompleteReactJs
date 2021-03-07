import React , {useState} from "react"
import { FaRegCircle , FaTimes , FaPen } from 'react-icons/fa'


const Icon = ({name}) =>{
        switch (name) {
            case "circle":
                return <FaRegCircle style={{color:"black"}}  className="icons"/>;
            case "cross":
                return  <FaTimes style={{color:"black"}} className="icons" />;    
        
            default:
                return <FaPen  className="icons"/>;
        }
    
}
export default Icon;
import React from "react"
import './Car.css'

export default props => (
    <div className="Car">
        <h3>Дорамы Имя :{props.name}</h3>
       <p> Дата выхода: <strong>{props.year}</strong></p> 
       <input type="text"  onChange={props.onChageName}  value={props.name}/>

       <button onClick={props.onDelete}>delete</button>
      
    </div>
)
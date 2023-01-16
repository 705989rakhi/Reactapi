//import React from 'react'
import React ,{onClickHandler, useEffect, useState } from "react";


function Card() {
  const [user,setUser] = useState([]);
  

  
      
   const fetchData =()=>{
    fetch("https://randomuser.me/api/?nat=us&results=3&page=1")
    .then((response) =>{
          return response.json();
    }).then((data)=>{
        let rakhi = data.results
         setUser(rakhi)
    })
   }

   useEffect(()=>{
    fetchData();
   },[])
 
    return (
        <div> <button onClick={onClickHandler}>Click Here</button>
        <div className="clearfix">
        <div className="row">
            {user.map(data => (
                <div className="col-md-4 animated fadIn" key={data.id.value}>
                 <div className="card">
                    <div className="card-body">
                        <div className="avatar">
                            <img
                               src={data.picture.large}
                               className="card-img-top"
                               alt=""
                               />
                        </div>
                        <h5 className="card-title">
                            {data.name.first + 
                             " " + 
                             data.name.last}
                        </h5>
                        <p className="card-text">
                            {data.location.city + 
                            ", " + 
                            data.location.state}
                            <br />
                            <span className="phone">{data.phone}</span>
                        </p>
                    </div>
                </div>   
                </div>
            ))} 
        </div>
        </div>
        </div>
    )
}

export default Card
import React from 'react';

function Project ({item})  {
    return (
        
<div className="card" style={{width: "18rem"}}>
  <img src={`images/${item.image}`} className="card-img-top" alt="Plants"/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <a href={item.site} className="btn btn-primary">View application {item.title}</a>
  </div>
</div>

    )
}

export default Project;



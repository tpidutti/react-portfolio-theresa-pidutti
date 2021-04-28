import React from "react";

function Project({ item }) {
  return (
    <div>
      <div className="card" id="my experience">
        <div className="img-container">
          <img alt="plants" src={`images/${item.image}`} />
        </div>
        <div className="content">
          <a href={item.site} class="card-link">
            View application
          </a>
          <h3 className="title-project"> {item.name}</h3>
          <p> {item.description}</p>
        </div>
      </div>
</div>
  );
}

export default Project;

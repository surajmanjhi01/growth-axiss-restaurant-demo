import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            we have  a team of passionate food enthusiasts, creative chefs, and dedicated staff who are committed to delivering an exceptional dining experience. From our talented culinary team crafting innovative dishes to our friendly service staff ensuring your comfort, every member of our team plays a crucial role in making your visit memorable. We take pride in our collaborative spirit and shared love for great food, which is reflected in the vibrant atmosphere and delicious offerings at Skye Dine.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

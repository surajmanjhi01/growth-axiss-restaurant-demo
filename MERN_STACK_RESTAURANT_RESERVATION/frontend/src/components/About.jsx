import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             At Skye Dine, we’re more than just a place to eat — we’re where good food meets great vibes. Designed for trendsetters and food lovers aged 18–30, we bring you bold continental and Chinese flavors without burning a hole in your pocket.

Relax on our rooftop lounge with a stunning airport view — a rare experience in the area. Whether you’re here for our handcrafted coffees from Classic Coffee Blender, bubble tea, tasty platters or just chilling with friends, Skye Dine is your go-to hub for memorable bites and good times.

With dedicated spaces for both lounge and café, variety on the menu, and a vibe that keeps you coming back — we’re where your day feels a little brighter.
            </p>
            <Link to={"/menu"} className="exploreBtn">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

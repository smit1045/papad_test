import React from "react";
import "./home.css";
// import sound from "../../images/sound2.wav";

const Home = () => {

  // function play(){
  //   new Audio(sound).play()
  // }
  return (
    <section className="home">
      <div className="content">
        <h3>
          Best in <span>Business</span> Products for you
        </h3>
        <p>
          We promise On Time Delivery whether it's{" "}
          <div className="mon">
            <p className="soon">summer, winter or monsoon.</p>
          </div>
        </p>
        <a href="#products" className="btn">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Home;

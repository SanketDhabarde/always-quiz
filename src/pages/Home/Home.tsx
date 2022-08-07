import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components";
import { useTitle } from "../../hooks";
import "./Home.css";

function Home(): JSX.Element {
  useTitle("Home");
  return (
    <>
      <main className="landing-main grid-2-col">
        <div className="content center-div p-5">
          <div className="welcome">
            <h2 className="landing-heading">Quiz App</h2>
            <p className="welcome-content text-m">
              Let's see how much you know 😎
            </p>
          </div>
          <div className="get-started pt-4">
            <Link to="/categories" className="btn btn-primary btn-link">
              Play Now
            </Link>
          </div>
        </div>
        <div className="center-div hero-img p-5">
          <img src="/hero.svg" alt="hero" className="img-responsive" />
        </div>
      </main>
      <hr className="separator" />
      <Footer />
    </>
  );
}

export default Home;

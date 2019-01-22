import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../images/Avatar.JPG";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={avatar} alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1>Full Stack Web Developer </h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>
              <div className="social-links">
                //Linkden
                <a
                  href="https://www.google.co.za/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* GitHub */}
                <a
                  href="https://www.google.co.za/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* freeCodeCamp */}
                <a
                  href="https://www.google.co.za/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
                {/* youtube */}
                <a
                  href="https://www.google.co.za/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Masood Gool</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I am a passionate self-taught software developer with 2+ years of
              experience in programming and mentorship. I have trained over 2000
              students in various programming fields including Full Stack Web
              Development, Data Science and Mobile Development. I am fast
              learner, an enthusiastic team player and creative problem solver.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5> Address</h5>
            <p>49 Wanderers Avenue Newclare 2093</p>
            <h5> Phone</h5>
            <p>078 708 3701</p>
            <h5> email</h5>
            <p>masoodgool@gmail.com</p>
            <h5> website</h5>
            <p>masoodgool.herokuapp.com/</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={2019}
              jobName="TRAINING COORDINATOR AND LEAD MENTOR - Hyperion Development"
              jobDescription="Head Mentor on the Fullstack Web Developer, Software Engineering
              and Android Development Bootcamps.
              Management of the mentorship team.
              Strategic planning and implementation of mentorship OKR's for 2018.
              Hiring and training new mentors.
              Recording and analysis of student analytics.
              Conducting weekly programming webinars."
            />
            <Experience
              startYear={2016}
              endYear={2017}
              jobName="CONTENT DEVELOPER AND TUTOR - Hyperion Development"
              jobDescription="Designed the Introduction to Computer Science and Introduction to
              Programming courses.
              Assisted with the development of the Android Mobile Development
              Micro-Degree in partnership with Google.
              Marking of students tasks
              Conducted a 3-month workshop for 20 students in partnership with
              CapaCiTi (Cape Innovation and Technology Initiative)"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2021}
              schoolName="University Of South Africa"
              schoolDescription="BACHELOR OF SCIENCE, COMPUTING (INCOMPLETE)"
            />
            <Education
              startYear={2015}
              endYear={2016}
              schoolName="Hyperion Development"
              schoolDescription="Java Software Developer"
            />
            <Education
              startYear={2010}
              endYear={2013}
              schoolName="University Of Johannesburg"
              schoolDescription="BACHELOR OF COMMERCE, ACCOUNTING"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="JavaScript" progress={85} />
            <Skills skill="React" progress={80} />
            <Skills skill="Node" progress={80} />
            <Skills skill="Mongo" progress={75} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

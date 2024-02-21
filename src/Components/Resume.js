import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description1}
            <br />{work.description2}
            <br />{work.description3}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
            <div><h3>Systex</h3>
              <p className="info">Full Stack Developer<span>&bull;</span> <em className="date">Feb 2022 - Feb 2023</em></p>
              <p>- End-to-end designed and implemented functions & two plugin modules for e-commerce solutions.
                <br />- Fixed and refactored functions to meet different clients’ needs."
                <br />- Built maintainable/scalable web applications/libraries with third-party software integration.
                <br />- Worked on 5+ corporate-scaled MVC web apps with layered architecture.
                <br />- Front-end development using Angular (rxjs, boostrap)/Razor Page (jQuery, AJAX).
                <br />- Developed back-end solutions with ASP.NET MVC/Web API (.NET Core, .NET 6, Entity Framework, LINQ, RESTful API).
                <br />- Wrote stored procedures. (MSSQL)
                <br />- Initiated and organized a study group.
              </p>
            </div>
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col mb-1.5">

            {/* <p>{skillmessage}</p> */}

            {/* <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div> */}
            <div className="grid grid-cols-1 gap-20 text-gray-800">
              
              <div className="flex flex-col">
                <span className="text-center font-bold text-3xl my-5">TECHNICAL</span>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col">
                    <span className="ml-2 font-medium">C# / ASP.NET</span>
                    <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                      <div className="h-full rounded-full bg-sky-600" style={{ width: `${90}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="ml-2 font-medium">MSSQL</span>
                    <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                      <div className="h-full rounded-full bg-sky-600" style={{ width: `${75}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="ml-2 font-medium">ANGULAR / VUE / JAVASCRIPT / HTML / CSS</span>
                    <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                      <div className="h-full rounded-full bg-sky-600" style={{ width: `${75}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="ml-2 font-medium">DOCKER / NUNIT / MONGODB</span>
                    <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                      <div className="h-full rounded-full bg-sky-600" style={{ width: `${50}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="ml-2 font-medium">JAVA / SPRING MVC / THYMELEAF / POSTGRESQL</span>
                    <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                      <div className="h-full rounded-full bg-sky-600" style={{ width: `${50}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-center font-bold text-3xl my-5">LANGUAGES</span>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col">
                    <span className="ml-2 font-medium">CHINESE</span>
                    <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                      <div className="h-full rounded-full bg-sky-800" style={{ width: `${100}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="ml-2 font-medium">ENGLISH</span>
                    <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                      <div className="h-full rounded-full bg-sky-800" style={{ width: `${90}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="ml-2 font-medium">JAPANESE</span>
                    <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                      <div className="h-full rounded-full bg-sky-800" style={{ width: `${30}%` }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;

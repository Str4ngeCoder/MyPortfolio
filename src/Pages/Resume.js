import { styled } from "styled-components";

const Resume = () => {
  return (
    <StyledResumeContainer className="container">
      <section className="head | d-flex justify-content-between">
        <section className="">
          <p className="h1">Shad Jafar Azmi</p>
          <p className="h4">Front end developer</p>
        </section>
        <section>
          <p>Koel Bank, Panposh</p>
          <p>Rourkela(769004)</p>
          <p>Odisha, India</p>
          <p>+91-8327798120</p>
          <p>shadjafarazmi.sja@gmail.com</p>
          <a target="_blank" href="https://www.linkedin.com/in/shad-jafar-azmi-588443205" className="text-decoration-none">
            LinkedIn
          </a>
        </section>
      </section>

      <p>
        <b>CAREER OBJECTIVE - </b> Dedicated front-end developer with a proven
        track record of creating visually captivating and user-centric UI
        designs. Seeking new opportunities to leverage my expertise in HTML5,
        CSS3, JavaScript, and ReactJs to contribute towards organizational
        success. Eager to collaborate with cross-functional teams, refine user
        experiences, and innovate solutions that drive user engagement and
        satisfaction. Committed to continuous learning and growth, I aim to
        evolve into a versatile professional capable of tackling diverse
        challenges, ultimately leading to a rewarding and fulfilling career.
      </p>

      <section className="career">
        <b>EDUCATION – </b>
        <section>
          <ul>
            <li>
              <section className="d-flex justify-content-between my-0">
                <p>
                  <b>B.TECH </b>in Electronics and Telecommunication Engineering
                  (VSSUT Burla, Odisha)
                </p>
                <p > Aug 2017- Sept 2021</p>
              </section>
              <p>Grade - CGPA : 7.27</p>
            </li>
            <li>
              <section className="d-flex justify-content-between my-0">
                <p>
                  <b>INTERMEDIATE </b>
                  (DAV Public School, Rourkela)
                </p>
                <p> May 2017</p>
              </section>
              <p>Grade - 82.6%</p>
            </li>
            <li>
              <section className="d-flex justify-content-between my-0">
                <p>
                  <b>MATRICULATION </b>
                  (St. Gregorios Higher Secondary School, Rourkela)
                </p>
                <p> May 2015</p>
              </section>
              <p>Grade - 88.5%</p>
            </li>
          </ul>
        </section>
      </section>

      <section>
        <p>
          <b>EXPERIENCE – 2+ years</b>
        </p>
        <p>[Programmer Analyst] - [Cognizant Technology Solution]</p>
        <p>[July 2021 - Present]</p>
        <ul>
          <li>
            {" "}
            Developed and styled a diverse range of UI components, such as
            sidebars, error toasts, modals, tooltips, dropdowns, and forms
            utilizing HTML5, CSS3, JavaScript, Bootstrap, and ReactJs. Ensured
            consistent design and an optimal user experience across the
            application
          </li>
          <li>
            {" "}
            Collaborated closely with clients and cross-functional teams to
            gather requirements and iteratively refine designs. Resulted in the
            creation of user-friendly and visually appealing interfaces that
            aligned with project goals.
          </li>
          <li>
            {" "}
            Applied industry best practices in UI/UX design, contributing to a
            seamless and intuitive user journey that enhanced overall usability
            and engagement
          </li>
          <li>
            {" "}
            Conducted client demos to solicit feedback and validate design
            choices, leading to continuous improvement and refinement of
            component functionality and visual aesthetics.
          </li>
          <li>
            {" "}
            Received positive feedback from clients for demonstrating a strong
            attention to detail and a keen eye for design, reinforcing the
            effectiveness and quality of the UI components.
          </li>
          <li>
            {" "}
            I actively participated in a comprehensive project comprising
            multiple interconnected sub-projects.
          </li>
          <li>
            {" "}
            Conducted successful client demos at the end of each sprint to
            showcase my work.
          </li>
        </ul>
      </section>
      <section>
        <p>
          <b>SKILLS</b>
        </p>
        <b>
          <ul>
            <li> UI/UX – HTML5, CSS3 , Javascript.</li>
            <li> Libraries – React Js,Redux.</li>
            <li> Frameworks –Express js.</li>
            <li> Programming Language - Python 3, Node js.</li>
            <li> Databases – RDBMS - MySQL databases - MongoDB</li>
            <li> API Testing tools - Postman</li>
            <li>
              {" "}
              Tools – PyCharm, Eclipse, Visual Studio Code, Microsoft Azure.
            </li>
            <li>
              Other Technical skills - Responsive Design, SASS, less, Bootstrap,
              GIT, Github, Object Oriented Programming, Software Development
              Life Cycle,Agile, Scrum
            </li>
          </ul>
        </b>
      </section>

      <section>
        <p>
          <b>ACADEMIC PROJECTS</b>
        </p>
        <ul>
          <li>
            Designed and implemented Traffic Light Controlling System in VLSI
            design at Electronics Corporation of India Limited.
          </li>
          <li>
            Major Project - Developed Smart Home Security System Using Arduino.
          </li>
        </ul>
      </section>

      <section>
        <p><b>ACHIEVEMENTS</b></p>
        <ul>
          <li><b>Gold Medalist(district level)</b> in science exhibition</li>
          <li>Achieved a <b>top 200</b> global ranking in the coding competition organized by Credit Suisse in 2021.</li>
        </ul>
      </section>

      <section>
        <p><b>STRENGTH</b></p>
        <p> Team Player, Dedicated, Leadership Skills, Communication skills, Problem-solving,
Detail oriented.</p>
      </section>

      <section>
        <p><b>LANGUAGES:</b> English, Hindi</p>
      </section>
    </StyledResumeContainer>
  );
};

export default Resume;

const StyledResumeContainer = styled.section`
  padding-top: 8rem;
  color: ${(props) => props.theme.text};
  font-size: 1.4rem;
  .head {
    border-bottom: 0.1rem solid ${(props) => props.theme.link};
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
  .career{
    li{
      p{
        margin: 0;
      }
      margin-bottom: 1rem;
    }
  }
  > section{
    margin-bottom: 2rem;
  }
`;

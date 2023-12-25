import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1Img1 from "../assets/img/project1/Host 1.png";
import proj1Img2 from "../assets/img/project1/Host 2.png";
import proj1Img3 from "../assets/img/project1/Host 3.png";
import proj2Img1 from "../assets/img/project2/Expense Tracker App Demo.gif";
import proj2Img2 from "../assets/img/project2/Expense Tracker App Demo IMG2.png";
import proj2Img3 from "../assets/img/project2/Expense Tracker App Demo IMG3.png";
import proj3Img1 from "../assets/img/project3/Snake Game SC1.png";
import proj3Img2 from "../assets/img/project3/Snake Game SC2.png";
import proj3Img3 from "../assets/img/project3/Snake Game SC3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project_1 = [
    {
      title: "Main Menu",
      imgUrl: proj1Img1,
    },
    {
      title: "Level Example",
      imgUrl: proj1Img2,
    },
    {
      title: "Host Ability Example",
      imgUrl: proj1Img3,
    },
  ];

  const project_2 = [
    {
      title: "App Demo",
      imgUrl: proj2Img1,
    },
    {
      title: "Expense Log",
      imgUrl: proj2Img2,
    },
    {
      title: "Main Menu",
      description: "Displayed Using Dark Mode",
      imgUrl: proj2Img3,
    },
  ];

  const project_3 = [
    {
      title: "Main Menu",
      description: "Game Displayed In French",
      imgUrl: proj3Img1,
    },
    {
      title: "Instructions",
      description: "Game Displayed In French",
      imgUrl: proj3Img2,
    },
    {
      title: "Level Example",
      imgUrl: proj3Img3,
    },
  ];

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     // Center vertically (if the div has a specific height)
    // height: '100px',        // Uncomment and adjust if you want a specific height for the div
    width: '100%',            // Take up the full width of the parent
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some cool projects that I've worked on! I'm always working on new things so be sure to check this part often to stay up to date!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Host (Unity + C#)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Expense Tracker App (Swift)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Snake Game (Python)</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Host is a fast-paced 2D platformer where you play as a weak character who has the ability to temporarily possess their enemies and use their strengths for combat and traversing levels.</p>
                      <div className="social-icon" style={centerStyle}>
                        <a href="https://georgesalib.itch.io/host" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Play1" /></a>
                      </div>
                      <div><br></br></div>
                      <Row>
                        {
                          project_1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <div className="centered-container">
                        <ul>
                          <li>Used Unity and C# to create a 2D platformer game where you can host into enemies, possessing their abilities</li>
                          <li>Implemented custom code to control health, host ability, enemies, player, etc.</li>
                          <li>Menu system and level logic created to provide player with seemless gameplay</li>
                          <li>Custom assets created</li>
                        </ul>
                      </div>
                      <div className="social-icon" style={centerStyle}>
                        <a href="https://github.com/CISC-226-W23/226-game-design-project-gdpb3" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Documentation1" /></a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This is an IOS app allowing you to track and see expenses in an interactive way.</p>
                      <Row>
                        {
                          project_2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <div className="centered-container">
                        <ul>
                          <li>Used Swift and SwiftUI to create a sleek Expense Tracker App</li>
                          <li>Implemented an interactive chart using SwiftUICharts allowing users to track daily expenses</li>
                          <li>Categorized purchases by corresponding category with unique set of symbols</li>
                          <li>Monthly view full list of purchases</li>
                        </ul>
                      </div>
                      <div className="social-icon" style={centerStyle}>
                        <a href="https://github.com/george-salib/Expense_Tracker_App" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Documentation2" /></a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>This is python snake game where you must eat apples in order to grow your snake. Collect abilities to aid you and avoid obstacles. Up to 2 players.</p>
                      <div><br></br></div>
                      <Row>
                        {
                          project_3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <div className="centered-container">
                        <ul>
                          <li>Used Pygame to create a canvas, add sound, as well as to animate the snake and obstacles of the game</li>
                          <li>Implemented the turtle library to draw the objects on screen</li>
                          <li>Enables movement control over the x and y coordinates of the screen by the user using input keys</li>
                          <li>Ability for 2-players mode</li>
                        </ul>
                      </div>
                      <div className="social-icon" style={centerStyle}>
                        <a href="https://github.com/george-salib/Worm_Game" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Documentation3" /></a>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {

  const logoStyle = {
    width: '7%', 
    height: 'auto'
  };

  return (
    <footer className="footer">
      <Container>
        <br></br>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={logoStyle} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end centered-content">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/georgesalib" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
            <a href="https://github.com/george-salib" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/" exact>
          Ecommerce Layout
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";


// function Header() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" collapseOnSelect>
//         <Container>
//           <LinkContainer to="/">
//             <Navbar.Brand>Ecommerce Layout</Navbar.Brand>
//           </LinkContainer>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <LinkContainer to="/">
//                 <Nav.Link>Home</Nav.Link>
//               </LinkContainer>

//               <LinkContainer to="/signup">
//                 <Nav.Link>Signup</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/login">
//                 <Nav.Link>Login</Nav.Link>
//               </LinkContainer>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;


export default Header;
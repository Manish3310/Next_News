import Link from "next/link";
import { Container, Nav, NavDropdown, Navbar, NavbarBrand } from "react-bootstrap";

const NavBar = () => {
    return ( 
        <Navbar className=" h-14" bg="primary" variant="dark" sticky="top" collapseOnSelect expand="sm">
            <Container>
            <Navbar.Brand>NextNews</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar"/>
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as = {Link} href="/">Breaking News</Nav.Link> 
                        <Nav.Link as = {Link} href="/search">Search</Nav.Link>
                        <NavDropdown title="Categories" id="category-dropdown">
                            <NavDropdown.Item as = {Link} href="/categories/business">Business</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} href="/categories/entertainment">Entertainment</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} href="/categories/general">General</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} href="/categories/health">Health</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} href="/categories/science">Science</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} href="/categories/sports">Sports</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} href="/categories/technology">Technology</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link as = {Link} href="/Login">LOGIN</Nav.Link>
                        <Nav.Link as = {Link} href="/">SIGN UP</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                
            </Container> 

        </Navbar>
     );
}
 
export default NavBar;
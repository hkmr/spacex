import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { action } from "../store/ThemeSlice";

const AppNavbar = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    return (
        <Navbar bg={theme} expand="lg" variant={theme}>
            <Container>
                <Navbar.Brand href="#home">Space X</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink className="nav-link" to="/history">
                            History
                        </NavLink>
                        <NavLink className="nav-link" to="/address">
                            Address
                        </NavLink>
                        <Nav.Item className="mx-2">
                            <Form.Check
                                type="switch"
                                id="theme-switch"
                                label="Theme"
                                checked={theme === "light" ? false : true}
                                onChange={() => {
                                    dispatch(action.toggleTheme());
                                }}
                            />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;

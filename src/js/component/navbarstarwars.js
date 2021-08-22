import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import starwars from "../../img/starwarstransp.png";

export const NavbarStarWars = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">
					<img src={starwars} width="75" height="60" className="d-inline-block align-top" alt="" />
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="">Personajes</Nav.Link>
					<Nav.Link href="">Planetas</Nav.Link>
					<Nav.Link href="">Vehiculos</Nav.Link>
				</Nav>
				<Dropdown>
					<Dropdown.Toggle variant="warning" id="dropdown-split-basic">
						Favoritos
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Container>
		</Navbar>
	);
};

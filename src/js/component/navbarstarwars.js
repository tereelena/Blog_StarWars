import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import starwars from "../../img/starwarstransp.png";
import { FaRegHeart, FaListAlt } from "react-icons/fa";

export const NavbarStarWars = () => {
	const { store, actions } = useContext(Context);
	//const [listafavoritos, setlistafavoritos] = useState([]);

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">
					<img src={starwars} width="75" height="60" className="d-inline-block align-top" alt="" />
				</Navbar.Brand>

				<Dropdown>
					<Dropdown.Toggle variant="warning" id="dropdown-split-basic">
						Favoritos
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.lista_favoritos.map((favorito, posicion) => {
							if (lista_favoritos !== "") {
								return (
									<Dropdown.Item key={posicion}>
										{favorito}

										<i
											className="fas fa-trash-alt"
											onClick={posicion => {
												actions.removefav(lista_favoritos);
											}}
										/>
									</Dropdown.Item>
								);
							} else {
								return <h5> your list is empty</h5>;
							}
						})}
					</Dropdown.Menu>
				</Dropdown>
			</Container>
		</Navbar>
	);
};

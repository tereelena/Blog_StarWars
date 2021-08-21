import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Container, Button, Card, Row, Col, Figure, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Persona = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getDetallePeople(theid);
	});

	return (
		<Container fluid>
			<h1 className="fst-italic text-start fs-4 color-font">Detalle Personaje</h1>

			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>Name</th>
						<th>Gender</th>
						<th>Heigth</th>
						<th>Mass</th>
						<th>Hair Color</th>
						<th>Homeworld</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{store.detalle_people.name}</td>
						<td> {store.detalle_people.gender}</td>
						<td>{store.detalle_people.height}</td>
						<td>{store.detalle_people.mass}</td>
						<td>{store.detalle_people.hair_color}</td>
						<td>{store.detalle_people.homeworld}</td>
					</tr>
				</tbody>
			</Table>
			<Link to={"/"}> Back Home </Link>
		</Container>
	);
};
Persona.propTypes = {
	match: PropTypes.object
};

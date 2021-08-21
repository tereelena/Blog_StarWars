import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Container, Button, Card, Row, Col, Figure, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planeta = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getDetallePlanets(theid);
	});

	return (
		<Container fluid>
			<h1 className="fst-italic text-start fs-4 color-font">Detalle Planeta</h1>

			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>Diameter</th>
						<th>Rotation Period</th>
						<th>Orbital_ Period</th>
						<th>Climate</th>
						<th>Terrain</th>
						<th>Population</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{store.detalle_planets.diameter}</td>
						<td>{store.detalle_planets.rotation_period}</td>
						<td>{store.detalle_planets.orbital_period}</td>
						<td>{store.detalle_planets.climate}</td>
						<td>{store.detalle_planets.terrain}</td>
						<td>{store.detalle_planets.population}</td>
					</tr>
				</tbody>
			</Table>
			<Link to={"/"}> Back Home </Link>
		</Container>
	);
};
Planeta.propTypes = {
	match: PropTypes.object
};

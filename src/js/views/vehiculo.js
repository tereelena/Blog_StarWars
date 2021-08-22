import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Container, Button, Card, Row, Col, Figure, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculo = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getDetalleVehiculos(theid);
	});

	return (
		<Container fluid>
			<h1 className="fst-italic text-start fs-4 color-font">Detalle Vehiculo</h1>

			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>Name</th>
						<th>Model</th>
						<th>Vehicle Class</th>
						<th>Manufacturer</th>
						<th>Cost In Credits</th>
						<th>Passengers</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{store.detalle_vehiculos.name}</td>
						<td>{store.detalle_vehiculos.model}</td>
						<td>{store.detalle_vehiculos.vehicle_class}</td>
						<td>{store.detalle_vehiculos.manufacturer}</td>
						<td>{store.detalle_vehiculos.cost_in_credits}</td>
						<td>{store.detalle_vehiculos.passengers}</td>
					</tr>
				</tbody>
			</Table>
			<Link to={"/"}> Back Home </Link>
		</Container>
	);
};
Vehiculo.propTypes = {
	match: PropTypes.object
};

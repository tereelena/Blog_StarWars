import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Container, Button, Card, Row, Col, Figure, Table } from "react-bootstrap";

export const Planeta = () => (
	<>
		<Container fluid>
			<h1 className="fst-italic text-start fs-4 color-font">Detalle Planeta</h1>
			<Row>
				<Col>
					<Figure>
						<Figure.Image width={171} height={180} alt="171x180" src="holder.js/171x180" />
						<Figure.Caption>Nulla vitae elit libero, a pharetra augue mollis interdum.</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>diameter</th>
						<th>rotation_period</th>
						<th>orbital_period</th>
						<th>climate</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	</>
);

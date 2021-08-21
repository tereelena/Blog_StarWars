import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";

export const CardsPlanetas = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container fluid="md">
			<Row className="scrollhorizontal">
				{store.planets.map((planetas, posicion) => {
					return (
						<Col key={posicion}>
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>{planetas.name}</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</Card.Text>
									<Link to={"/planeta/" + planetas.uid}> Go Info </Link>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { FaRegHeart, FaListAlt } from "react-icons/fa";

export const CardsVehiculos = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container fluid="md">
			<Row className="scrollhorizontal">
				{store.vehiculos.map((vehiculos, posicion) => {
					return (
						<Col key={posicion}>
							<Card style={{ width: "18rem" }}>
								{
									//<Card.Img variant="top" src="holder.js/100px180" />
								}
								<Card.Body>
									<Card.Title>{vehiculos.name}</Card.Title>
									<Card.Text>{vehiculos.url}</Card.Text>
									<Link to={"/vehiculo/" + vehiculos.uid}>
										<Button variant="outline-dark">Go Info</Button>
									</Link>
									<Link className="mx-3" to="">
										<Button
											variant="outline-warning"
											onClick={() => {
												actions.addFav(vehiculos.name);
												console.log(store.lista_favoritos);
											}}>
											<FaRegHeart />
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

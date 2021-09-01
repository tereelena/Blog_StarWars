import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { FaRegHeart, FaListAlt } from "react-icons/fa";

export const CardsPlanetas = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid="md">
			<Row className="scrollhorizontal">
				{store.planets.map((planetas, posicion) => {
					return (
						<Col key={posicion}>
							<Card border="dark" style={{ width: "18rem" }}>
								{
									//<Card.Img variant="top" src="holder.js/100px180" />
								}
								<Card.Body>
									<Card.Title>{planetas.name}</Card.Title>
									<Card.Text>{planetas.url}</Card.Text>
									<Link to={"/planeta/" + planetas.uid}>
										<Button variant="outline-dark">Go Info</Button>
									</Link>
									<Link className="mx-3" to="">
										<Button
											variant="outline-warning"
											onClick={() => {
												actions.addFav(planetas.name);
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

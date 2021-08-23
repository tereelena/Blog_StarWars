import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { FaRegHeart } from "react-icons/fa";

export const CardsPersonajes = () => {
	const { store, actions } = useContext(Context);
	//const favpersonajes = [];
	//const [inputfavoritos, setfavoritos] = useState("");
	const [listafavoritos, setlistafavoritos] = useState([]); // listafavoritoos, arreglo debe inicializarse en un arreglo vacio
	//const img = [{ name: "img1" }, { name: "img2" }, { name: "img3" }];
	return (
		<Container fluid="md">
			<Row className="scrollhorizontal">
				{store.people.map((persona, posicion) => {
					return (
						<Col key={posicion}>
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src="holder.js/100px180" />
								<Card.Body>
									<Card.Title>{persona.name}</Card.Title>
									<Card.Text>{persona.url}</Card.Text>
									<Link to={"/persona/" + persona.uid}>
										<Button variant="outline-dark">Go Info</Button>
									</Link>
									<Link className="justify-content-end" to="">
										<Button
											variant="outline-warning"
											onClick={() => {
												setlistafavoritos([...listafavoritos, persona.name]);
												console.log(listafavoritos);
												console.log(listafavoritos.length);
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

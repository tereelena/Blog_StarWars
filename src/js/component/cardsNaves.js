import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

export const CardsNaves = () => {
	return (
		<Container fluid="md">
			<Row className="scrollhorizontal">
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="primary">Go Info</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="primary">Go Info</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</Card.Text>
							<Button variant="primary">Go Info</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

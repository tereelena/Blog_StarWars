import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CardsPersonajes } from "../component/cardspersonajes";
import { CardsPlanetas } from "../component/cardsPlanetas";
import { CardsNaves } from "../component/cardsNaves";
import { CardsVehiculos } from "../component/cardsVehiculos";
import Context from "../store/appContext";

export const Home = () => (
	<>
		<div className="container-fluid">
			<h1 className="fst-italic text-start fs-4 color-font">Personajes</h1>
			<CardsPersonajes />
		</div>
		<div className="container-fluid">
			<h1 className="fst-italic text-start fs-4 color-font">Planetas</h1>
			<CardsPlanetas />
		</div>
		<div className="container-fluid">
			<h1 className="fst-italic text-start fs-4 color-font">Vehiculos</h1>
			<CardsVehiculos />
		</div>
	</>
);

import { CardsPlanetas } from "../component/cardsPlanetas";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehiculos: [],
			detalle_people: [],
			detalle_planets: [],
			detalle_vehiculos: [],
			lista_favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                        fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				//loadsomedata people
			},
			addFav: nombre => {
				const store = getStore();
				setStore({
					lista_favoritos: [...store.lista_favoritos, nombre]
				});
			},
			removefav: posicion => {
				const store = getStore();
				console.log(posicion);
				const newListfav = store.lista_favoritos.filter(key => key !== posicion);
				setStore({ lista_favoritos: newListfav });
			},

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ people: result.results });
						console.log(store.people);
					})
					.catch(error => console.log("error", error));
			},

			getDetallePeople: uid => {
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ detalle_people: result.result.properties });
						console.log(store.detalle_people);
					})
					.catch(error => console.log("error", error));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
						console.log(store.planets);
					})
					.catch(error => console.log("error", error));
			},

			getDetallePlanets: uid => {
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ detalle_planets: result.result.properties });
						console.log(store.detalle_planets);
					})
					.catch(error => console.log("error", error));
			},
			getVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(result => {
						setStore({ vehiculos: result.results });
						console.log(store.vehiculos);
					})
					.catch(error => console.log("error", error));
			},
			getDetalleVehiculos: uid => {
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ detalle_vehiculos: result.result.properties });
						console.log(store.detalle_vehiculos);
					})
					.catch(error => console.log("error", error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

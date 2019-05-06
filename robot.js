/*
Code for the 1st project: Chapter 7 - A robot
*/

const roads = [
"Alice's House-Bob's House", "Alice's House-Cabin",
"Alice's House-Post Office", "Bob's House-Town Hall",
"Daria's House-Ernie's House", "Daria's House-Town Hall",
"Ernie's House-Grete's House", "Grete's House-Farm",
"Grete's House-Shop", "Marketplace-Farm",
"Marketplace-Post Office", "Marketplace-Shop",
"Marketplace-Town Hall", "Shop-Town Hall"
];


/*function destinationsFromSource(source, roads){
	let destinations = [];
	for(let i of roads){
		if(i.includes(source)){
			destinations.push(i.substr(i.indexOf('-') + 1));
		}
	}
	return destinations;
}*/


function buildGraph(edges){
	let graph = Object.create(null);
	function addEdge(from, to){
		if(graph[from] == null){
			graph[from] = [to];
		} else{
			graph[from].push(to);
		}
	}
	for(let [from, to] of edges.map(v => v.split('-'))){
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}

const roadGraph = buildGraph(roads);


class VillageState{
	constructor(place, parcels){
		this.place = place;
		this.parcels = parcels;
	}

	move(destination){
		if(!roadGraph[this.place].includes(destination)){
			return this;
		} else {
			let parcels = this.parcels.map(p => {
				if(p.place !== this.place)
					return p;
				return {place: destination, address:p.address};
			}).filter(p => p.place !== p.address);
			return new VillageState(destination, parcels);
		}
		
	}
}

let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);


let next = first.move("Alice's House");




function chooseRandom(array){
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}

function chooseRandomAfterOmit(array, omitKey){
	let filteredArray = array.filter(v => v !== omitKey);
	return chooseRandom(filteredArray);
}

function randomRobot(state){
	return {
		direction: chooseRandom(roadGraph[state.place])
	}
}


/* write a function to create a random village state */
VillageState.createRandomState = function(numParcels = 5){
	let diffPlaces = Object.keys(roadGraph);
	let place = chooseRandom(diffPlaces);

	let parcels = [], tempPlace;
	for(let i = 0; i < numParcels; i++){
		tempPlace = chooseRandom(diffPlaces);
		parcels.push({
			place: tempPlace,
			address: chooseRandomAfterOmit(diffPlaces, tempPlace)
		});
	}
	return new VillageState(place, parcels);
}


function runRobot(state, robot, memory){
	for(let turn = 0;; turn++) {
		if(state.parcels.length == 0){
			console.log(`Done in ${turn} turns`);
			break;
		}

		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moved to ${action.direction}`);
	}
}

/*
If we pass by all the places twice - we can deliver all parcels
*/
const mailRoute = [
"Alice's House", "Cabin", "Alice's House", "Bob's House",
"Town Hall", "Daria's House", "Ernie's House",
"Grete's House", "Shop", "Grete's House", "Farm",
"Marketplace", "Post Office"
];

function mailDeliveryRobot(state, memory){

	let index = memory || mailRoute.indexOf(state.place);
	let nextIndex = (index === (mailRoute.length - 1)) ? 0 : (index + 1);
	return {
		direction: mailRoute[nextIndex],
		memory: nextIndex
	}
}

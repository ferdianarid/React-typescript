import React from 'react';

// import Greeting Components
import Greeting from './components/Greeting';
// import Users from './components/Users';

// import PersonList from './components/PersonList';

import { Status } from "./components/Status"

import { Heading } from "./components/Heading"
import Books from './components/Books';

// import {name, userListName } from "../src/apis/Users"

function App() {
	return (
		<div className="App">

			{/* <Greeting name="Ferdian" orders={22} isCompleted={ true } />
			<Users users={name} />
			<PersonList nameList={userListName} /> */}

			<Status  status="success" />
			<Heading children="Indonesia" />

			<Books>
				<Heading>Books hooked in Campuss Bookself</Heading>
			</Books>

			<Greeting name="Ferdian" orders={33} isCompleted={false} />
		</div>
	);
}

export default App;
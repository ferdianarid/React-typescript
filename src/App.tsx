// import React from 'react';

// import Greeting Components
// import Greeting from './components/Greeting';
// import Users from './components/Users';

// import PersonList from './components/PersonList';

// import { Status } from "./components/Status"

// import { Heading } from "./components/Heading"
// import Books from './components/Books';

// import {name, userListName } from "../src/apis/Users"

// import { TestExam } from "./components/TestExam"

import { ButtonPrimary, ButtonSecondary } from "./components/Button"
function App() {
	return (
		<div className="App">
			<div className="m-4">
				<ButtonPrimary handleClick={(event) => console.log("Button Primary", event)} />
				<ButtonSecondary handleClick={(event) => console.log("Button Secondary", event)} />
			</div>
		</div>
	);
}

export default App;
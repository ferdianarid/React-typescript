import React from 'react';

// import Greeting Components
import Greeting from './components/Greeting';
import Users from './components/Users';

function App() {
	return (
		<div className="App">
			<Greeting name="Ferdian" orders={22} isCompleted={ true } />

			<Users firstName="Ferdian" lastName=' Ahmad R' />
		</div>
	);
}

export default App;
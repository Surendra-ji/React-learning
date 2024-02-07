import React from 'react';
import ErrorMsg from './components/errorMsg';
import PersonItems from './components/PersonItems';
import Container from './components/Container';

function App() {
  // let unknows = [];
  let unknows = ["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus", "Porta ac consectetur ac", "Vestibulum at eros", "ujar rasto gi"];
  return <React.Fragment>
    <Container>
      <h1>List of Unknows</h1>
      <ErrorMsg unknows = {unknows}/>
      <PersonItems unknows = {unknows}/>
    </Container>
  </React.Fragment>
}

export default App

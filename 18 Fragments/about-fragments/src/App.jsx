import React, { useState } from 'react';
import ErrorMsg from './components/errorMsg';
import PersonItems from './components/PersonItems';
import Container from './components/Container';
import PersonInputEvent from './components/PersonInputEvent';
import ChildToParentEvent from './components/ChildToParentEvent';

// parent file

function App() {
  let [textmsg, setTextmsg] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      let newList = [...textmsg, e.target.value]
      setTextmsg(newList);
      e.target.value = "";
    }
  }
    // let unknows = [];
    let unknows = ["Cras justo odio", "Dapibus ac facilisis in", "Morbi leo risus", "Porta ac consectetur ac", "Vestibulum at eros", "ujar rasto gi"];
  return <React.Fragment>
    <Container>
      <h1>List of Unknows</h1>
      <ErrorMsg unknows={unknows} />
      <PersonInputEvent />
      <PersonItems unknows={unknows} />
    </Container>

    <Container>
      <p>Child to parent event handling and useState Hook </p>
      <ChildToParentEvent handleKeyDown={onKeyDown} />
      {/* <p>{...textmsg}</p> */}
      <ErrorMsg unknows={textmsg} />
      <PersonItems unknows={textmsg} />
    </Container>
  </React.Fragment>
}

export default App

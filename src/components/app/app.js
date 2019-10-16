import React from 'react';
import './app.css';

import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
  );
}

export default App;

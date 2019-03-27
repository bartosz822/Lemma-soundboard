import React, { Component } from 'react';
import './App.css';
import SoundButton from './SoundButton';
import { Container, Header } from 'semantic-ui-react';
import config from './config.json'

class App extends Component {
  render() {
    return (
      <Container className={"App"}>
        <Header as="h1" dividing className={'App-header'}>
          Lemma soundboard
        </Header>
        {config.map(configEntry => <SoundButton url={window.location.origin + configEntry.url} label={configEntry.label}></SoundButton>)}
      </Container>
    );
  }
}

export default App;

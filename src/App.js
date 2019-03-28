import React, { Component } from 'react';
import './App.css';
import SoundButton from './SoundButton';
import { Container, Header, Image } from 'semantic-ui-react';
import config from './config.json'

class App extends Component {
  render() {
    return (
      <Container className={"App"} fluid>
        <Image style={{width: '100%'}} src={window.location.origin + '/lemma-gory.png'} size='small' fluid/>
        <Header as="h1" dividing className={'App-header'}>
          Lemma soundboard
        </Header>
        {config.map(configEntry => <SoundButton url={window.location.origin + configEntry.url} label={configEntry.label}></SoundButton>)}
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import Sound from 'react-sound';

class SoundButton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            status: Sound.status.STOPPED,
            buttonColor: ''
        };
    }
    
    togglePlayState = () => {
        console.log(this.state.status)
        console.log(this.state.status === Sound.status.PLAYING)
        if (this.state.status === Sound.status.PLAYING){
            this.setState({status: Sound.status.STOPPED, buttonColor: ''})
        } else {
            this.setState({status: Sound.status.PLAYING, buttonColor: 'green'})
        }
    }

    onFinishedPlaying = () => {this.setState({buttonColor: '', status: Sound.status.STOPPED})}

    render(){
        return <Button className={'Sound-button'} onClick={this.togglePlayState} color={this.state.buttonColor}>
                <Sound
                    url={this.props.url}
                    playStatus={this.state.status}
                    playFromPosition={0}
                    onFinishedPlaying={this.onFinishedPlaying}
                />
                {this.props.label}
            </Button>
    }


}

export default SoundButton
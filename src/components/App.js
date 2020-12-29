import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LandingHome from './webComponents/landingPage/LandingHome';
import MainLayout from './webComponents/musicHome/librarySection/MusicHomeMainLayout';
import LibraryLayout from './webComponents/musicHome/librarySection/MusicHomeLibraryLayout';
import Upload from './webComponents/upload/UploadFormView';
import AudioPlayer from './webComponents/musicHome/librarySection/AudioPlayer';
import PlayerState from '../context/PlayerState';
import AudioController from './webComponents/musicHome/librarySection/AudioController';
import BuyToken from './token/BuyToken';
import TrackTokens from './token/TrackToken';
import RedeemTokens from './token/RedeemToken';
import ViewStats from './token/ViewStats';

import Web3 from 'web3'
import Index from './contract call';
class App extends Component{
  render(){
    
    return (
      <Router>
      <div className="App">
        <PlayerState>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/musicHome" component={MainLayout} />
          <Route exact path="/musicHome/library" component={LibraryLayout} />
          <Route exact path="/musicHome/library/upload" component={Upload} />
          <Route exact path="/musicHome/library/controller" component={AudioController} />
          <Route exact path="/buyTokens" component={BuyToken} />
          <Route exact path="/trackTokens" component={TrackTokens} />
          <Route exact path="/redeemTokens" component={RedeemTokens} />
          <Route exact path="/viewStats" component={ViewStats} />
        </Switch>
        </PlayerState>
      </div>
      </Router>
    );
  }
}

export default App;

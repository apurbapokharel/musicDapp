import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LandingHome from './webComponents/landingPage/LandingHome';
import MainLayout from './webComponents/musicHome/librarySection/MusicHomeMainLayout';
import LibraryLayout from './webComponents/musicHome/librarySection/MusicHomeLibraryLayout';
import Upload from './webComponents/upload/UploadFormView';
import AudioPlayer from './webComponents/musicHome/librarySection/AudioPlayer';
import PlayerState from '../context/PlayerState';
import AudioController from './webComponents/musicHome/librarySection/AudioController';

function App() {
  return (
    <Router>
    <div className="App">
      <PlayerState>
      <Switch>
        <Route exact path="/" component={LandingHome} />
        <Route exact path="/musicHome" component={MainLayout} />
        <Route exact path="/musicHome/library" component={LibraryLayout} />
        <Route exact path="/musicHome/library/upload" component={Upload} />
        <Route exact path="/musicHome/library/controller" component={AudioController} />
      </Switch>
      </PlayerState>
    </div>
    </Router>
  );
}

export default App;

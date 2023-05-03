
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { Component } from 'react';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Navigation />
      <Logo /> 
      <ImageLinkForm />
      <Rank />
     {/* <FaceRecogintion /> */}
    </div>
  );
}
}
export default App;

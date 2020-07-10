import * as React from 'react';
import './App.scss';
import { BodyComponent } from './body';
import { HeaderComponent } from './header';
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <BodyComponent />
      </div>
    );
  }
}

export default App;

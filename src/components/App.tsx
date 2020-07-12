import * as React from 'react';
import './App.scss';
import { BodyComponent } from './body';
import { LayoutComponent } from './Layout';
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <LayoutComponent>
          <BodyComponent />
        </LayoutComponent>
      </div>
    );
  }
}

export default App;

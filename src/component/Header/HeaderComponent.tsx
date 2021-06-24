import React from 'react';
import './HeaderComponent.scss';
import MenuComponent from '../Menu/MenuComponent';

function HeaderComponent() {
    return (
      <header className="App-header">
        <h1>Mahendra's Portfolio</h1>
        <MenuComponent />
      </header>
    );
}

export default HeaderComponent;
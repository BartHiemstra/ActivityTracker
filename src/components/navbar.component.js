import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Activiteiten Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Mijn activiteiten</Link>
          </li>
          <li className="navbar-item">
          <Link to="/activity" className="nav-link">Nieuwe activiteit</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
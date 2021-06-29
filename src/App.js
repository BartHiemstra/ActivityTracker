import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import CreateActivity from "./components/create-activity.component";
import EditActivity from "./components/edit-activity.component";
import ActivityList from './components/activity-list.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ActivityList} />
        <Route path="/edit/:id" component={EditActivity} />
        <Route path="/activity" component={CreateActivity} />
      </div>
    </Router>
  );
}

export default App;

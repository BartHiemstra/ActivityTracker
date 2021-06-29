import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const Activity = props => (
  <tr>
    <td>{props.activity.description}</td>
    <td>{props.activity.duration}</td>
    <td>{moment(props.activity.date).format('DD-MM-YYYY')}</td>
    <td>
      <Link to={"/edit/"+props.activity._id}>bewerken</Link> | <a href="#" onClick={() => { props.deleteActivity(props.activity._id) }}>verwijderen</a>
    </td>
  </tr>
)

export default class ActivityList extends Component {
  constructor(props) {
    super(props);

    this.deleteActivity = this.deleteActivity.bind(this)

    this.state = {activities: []};
  }

  componentDidMount() {
    axios.get('https://api.barthiemstra.nl:5000/activities/')
      .then(response => {
        this.setState({ activities: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteActivity(id) {
    axios.delete('https://api.barthiemstra.nl:5000/activities/'+ id)
      .then(response => { console.log(response.data)});

    this.setState({
      activities: this.state.activities.filter(el => el._id !== id)
    })
  }

  activityList() {
    return this.state.activities.map(currentActivity => {
      return <Activity activity={currentActivity} deleteActivity={this.deleteActivity} key={currentActivity._id}/>;
    })
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="form-group">
        <a href="/activity"><input type="button" value="Nieuwe Activiteit" className="btn btn-primary" /></a>
        </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th> Omschrijving</th>
              <th style={{minWidth : '140px'}}>Tijd in minuten</th>
              <th style={{minWidth : '140px'}}>Datum</th>
              <th style={{minWidth : '200px'}}></th>
            </tr>
          </thead>
          <tbody>
            { this.activityList() }
          </tbody>
        </table>
      </div>
    )
  }
}
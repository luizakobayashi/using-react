import React, { Component } from 'react';
import "./menu.css";

export default class Menu extends Component {
	constructor(props){
		super(props)
		this.state={
			
		}
	}

  render() {
    return (
      <div className="Menu">
		<div className="buttons">
			<div className="left">
				<div className="box">---------------</div>
				<p>Dashboard</p>
				<p>My Surveys</p>
			</div>
			<div className="right">
				<p className="createNew">+ Create New</p>
			</div>
		</div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import "./card.css";

export default class Card extends Component {
	constructor(props){
		super(props)
		this.state={
			description: this.props.description,
			footer: this.props.footer
		}
	}

  render() {
    return (
      <div className="Card">
		<div className="left">
			<div className="containerletter">
				{this.props.title && <div className="letter">{this.props.title.substring(0,1)}</div>}
			</div>
		</div>
		<div className="right">
			<p className="name">{this.props.title}</p>
			<p className="years">{this.state.description}</p>
			<p className="place">{this.state.footer}</p>
		</div>
      </div>
    );
  }
}

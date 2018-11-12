import React, { Component } from 'react';
import "./content.css";

export default class Content extends Component {
	constructor(props){
		super(props)
		this.state={
		}
	}

  render() {
    return (
      <div className="Content">
	  	<div className="title">
			<p>Settings</p>
		</div>
		<div className="writtings">
			<p className="account">Account settings</p>
			<p className="active">Payments</p>
			<p className="sites">My sites</p>
			<p>Users</p>
		</div>
		<div className="bigbox">
			<div className="creditcard">
				<img src="../../../img/creditcard.png" />
			</div>
			<div className="invoices">
				<p>Invoices:</p>
				<p> DATE RANGE:</p>
			</div>
			<div className="otterbox">
				<p className="number">NUMBER</p>
				<p>DATE</p>
				<p>NAME</p>
				<p>PRICE</p>
			</div>
			<div className="dados">
				<p>0001</p>
				<p>01/05/15</p>
				<p>Invoice 0001/05/2015</p>
				<p>$49</p>
			</div>
		</div>
      </div>
    );
  }
}
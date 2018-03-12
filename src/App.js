import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './tachyons.min.css';

class Header extends Component {
	render() {
		return (
			<header className="bg-dark-gray white pa3 tc">
			  <h1 className="f3">Timekeeper</h1>
			</header>
		);
	}
}

class App extends Component {
  render() {
    return (
      <div className="App border-box">
        <Header/>
        <AddTimeForm />
      </div>
    );
  }
}

class AddTimeForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
		this.handleTaskChange = this.handleTaskChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleTaskChange(task) {
		this.setState({task});
	}
	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}
				className="ma2 mv3">
				<FormInput name="task" label="Task Name" value={this.state.task} onChange={this.handleTaskChange}/>
				<p><b>{this.state.task}</b></p>
			</form>
			
		);
	}
}

class FormInput extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.props.onChange(event.target.value);
	}
	render() {
		return (
			<div className="">
				<label htmlFor={this.props.name} className="db b mv1" >{this.props.label}</label>
				<input id={this.props.name} placeholder={this.props.label}
					value={this.props.value} onChange={this.handleChange}
					className="input-reset ba bw1 b--black pa1 mv1 w-100 border-box" />
			</div>
		);
	}
}

FormInput.propTypes =
{
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default App;

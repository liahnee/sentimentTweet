import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/stylesheets/Profile.css';

import { Form, Icon, Input } from 'semantic-ui-react';

import img from '../assets/profile2.12.jpg';
import NavBarOpener from "../components_sidebar/NavBarOpener";
import LoggedInHOC from "../HOC/LoggedInHOC";



class Profile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: this.props.name,
    username: this.props.username,
    password: '',
    newPassword: ''
  };

  handleChange = e => {
    e = e.target.value;
    this.setState({
      name: e
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, username, password, newPassword } = this.state;
    // console.log("handleSubmit");
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        credentials: 'include'
      },
      body: JSON.stringify({ name, username, password, newPassword})
    })
    .then(resp => resp.json())
    .then(data => {
      console.log("returned profile patch data", data)
    })
    .catch(err => {
      console.log(err)
    });
  };

    render() {
        return ( 
            <div 
            style={{  
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            className="profile"
              >
                <NavBarOpener toggle={this.props.toggleNav}/>   
                <div className='profile-center'>
                    <h2 className='profile-name'>
                        Username: <br />
                        {this.state.username}
                    </h2>
                    Please enter your current password and any other field you would like to change. 
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Field inline onChange={ e => this.handleChange(e.target.value)}>
                        <Form.Input placeholder={this.props.name} onChange={this.handleNewName} />
                        <Form.Input placeholder='Current Password' type='password' onChange={this.handleCurrentPassword}/>
                        <Form.Input placeholder='New Password' type='password' onChange={this.handleNewPasswordInput}/>
                        <Form.Button inverted icon className="profile-submit"><Icon name='pencil' /></Form.Button>

                        </Form.Field>
                    </Form>
                </div>
            </div>
        )     
    }
}


const sToP = (state) => {
	return {
    name: state.manageLogin.name,
    username: state.manageLogin.username
	};
};

const dToP = (dispatch) => ({
    login: (data) => dispatch({ type: 'LOGIN', name: data.name, username: data.username })
});


export default LoggedInHOC(connect(sToP, dToP)(Profile));

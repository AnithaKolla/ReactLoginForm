import React, { Component } from 'react';
import './form.css';

export default class FormLogin extends Component {
    constructor() {
        super();
        this.state = {
            username: "", 
            email: "",
            password: "",
            confirmPass: ""
        };
    }
    
    handleSubmit = e => {
        e.preventDefault();
        let { username, email, password, confirmPass } = this.state;
        console.log({ username, email, password, confirmPass });
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <section id='formBlock'>
                <article>
                    <form onSubmit={this.handleSubmit}>
                        <div className="formgroups">
                            <label htmlFor="">User Name: </label>
                            <input type="text" 
                                   placeholder='Enter username'
                                   name='username' 
                                   value={this.state.username} 
                                   onChange={this.handleChange} />
                        </div>
                        <div className="formgroups">
                            <label htmlFor="">Email: </label>
                            <input type="email" 
                                   placeholder='Enter user email'
                                   name='email' 
                                   value={this.state.email}
                                   onChange={this.handleChange} />
                        </div>
                        <div className="formgroups">
                            <label htmlFor="">Password: </label>
                            <input type="password" 
                                   placeholder='Enter password'
                                   name='password' 
                                   value={this.state.password}
                                   onChange={this.handleChange} />
                        </div>
                        <div className="formgroups">
                            <label htmlFor="">Confirm Password: </label>
                            <input type="password" 
                                   placeholder='Confirm your password'
                                   name='confirmPass' 
                                   value={this.state.confirmPass}
                                   onChange={this.handleChange} />
                        </div>
                        <div className="formgroups">
                            <input type="submit" value="Sign Up" />
                        </div>
                    </form>
                </article>
            </section>
        );
    }
}

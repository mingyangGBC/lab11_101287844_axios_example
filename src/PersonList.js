import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PersonList extends Component {

    state = {
        persons: []
    }

     //Component Lifecycle Callback
    componentDidMount =()=> {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    render() {
        return (
            <div class="bg-primary clearfix">
                {
                    this.state.persons.map(p=>(
                        <div class="clearfix">
                            <div>{p.name.title} {p.name.first} {p.name.last} - {p.login.uuid}</div>
                            <div class="pull-left">
                                <img class="rounded-circle" src={p.picture.large}/>
                            </div>
                            <div>User Name: {p.login.username}</div>
                            <div class="pull-right">Gender: {p.gender}</div>
                            <div>Time Zone Description: {p.location.timezone.description}</div>
                            <div>Email: {p.email}</div>
                            <div>Birth Date and Age: {p.dob.date} ({p.dob.age})</div>
                            <div>Register Date: {p.registered.date}</div>
                            <div>Phone#: {p.phone}</div>
                            <div>Cell#: {p.cell}</div>
                            <br/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { EmployeeDisplay } from './EmployeeDisplay';
import { EmployeeForm } from './EmployeeForm';
import { TotalEmployees } from './TotalEmployees';
import { Home } from './Home';
import { LoginPage } from './LoginPage';

export class App extends Component {
  state = {
    employeeTextDetails: ['Name', 'Gender', 'Education', 'Address'],
    employeeNumberDetails: ['Mobile Number', 'Experience'],
    email: '',
    dob: '',
    employee: '',
    employees: [],
    editEmployee: ''
  }

  handleChange = (e) => {
    this.setState({
      editEmployee: {
        ...this.state.editEmployee,
        [e.target.name]: e.target.value,
      },
      [e.target.name]: e.target.value
    })
  }

  loginSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in: ")
  }

  createEmployee = (e) => {
    e.preventDefault();
    const newEmployee = {
      'name': this.state["Name"],
      'email': this.state["email"],
      'mobileNumber': this.state["Mobile Number"],
      'dob': this.state["dob"],
      'gender': this.state["Gender"],
      'education': this.state["Education"],
      'experience': this.state["Experience"],
      'address': this.state["Address"]
    }
    axios.post("http://localhost:9450/createEmployee", newEmployee)
      .then(res => console.log(res.data))
      .then(() => <Redirect to={{ pathname: "/" }} />)
  }

  displayEmployee = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:9450/getEmployee/${this.state["Sap-Id"]}`)
      .then(res => this.setState({
        employee: res.data
      }))
  }

  displayAllEmployees = () => {
    axios.get("http://localhost:9450/getEmployees")
      .then(res => this.setState({
        employees: res.data
      })
      )
  }

  handleEdit = (id) => () => {
    axios.get(`http://localhost:9450/getEmployee/${id}`)
      .then(res => this.setState({
        editEmployee: res.data
      }))
  }

  updateEmployee = (e) => {
    e.preventDefault();
    axios.put("http://localhost:9450/updateEmployee", this.state.editEmployee)
      .then(res => console.log(res))
      .then(this.setState({
        editEmployee: ''
      }))
  }

  handleDelete = (id) => () => {
    axios.delete(`http://localhost:9450/deleteEmployee/${id}`)
      .then(() => {
        let updatedEmployees = [...this.state.employees].filter(emp => emp.sapId !== id);
        this.setState({
          employees: updatedEmployees
        })
      })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" render={() => <Home />} />
          <Route path="/register" render={() => <EmployeeForm
            handleChange={this.handleChange}
            createEmployee={this.createEmployee}
            textData={this.state.employeeTextDetails}
            numberData={this.state.employeeNumberDetails}
            dob={this.state.dob}
            email={this.state.email} />} />
          <Route path="/employeeList" render={() => <TotalEmployees
            employees={this.state.employees}
            displayAllEmployees={this.displayAllEmployees}
            handleChange={this.handleChange}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            editEmployee={this.state.editEmployee}
            updateEmployee={this.updateEmployee} />} />
          <Route path="/employee" render={() => <EmployeeDisplay
            handleChange={this.handleChange}
            createEmployee={this.createEmployee}
            employee={this.state.employee}
            displayEmployee={this.displayEmployee} />} />
        </Switch>
      </Router>)
  }
}
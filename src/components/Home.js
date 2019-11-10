import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">My HCL</a>
                        <NavLink className="navbar-brand" exact to="/register">Register</NavLink>
                        <NavLink className="navbar-brand" to="/employeeList">Emlpoyee List</NavLink>
                        <NavLink className="navbar-brand" to="/employee">Employee</NavLink>
                    </div>
                </div>
            </nav >
            <h1>Welcome to HCL</h1>
        </div >
    )
}
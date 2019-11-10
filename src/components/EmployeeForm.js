import React, { Fragment } from 'react';
import { Header } from './Header';

export const EmployeeForm = props =>
    <Fragment >
        <Header />
        <section className="container col-4">
            <h1>Register New Employee</h1>
            <form className="form-control-lg" onSubmit={props.createEmployee}>
                {
                    props.textData.map(ip => <Fragment key={ip}>
                        <label>{ip}</label><br />
                        <input className="form-control" type="text" name={ip} onChange={props.handleChange} required /><br />
                    </Fragment>)
                }
                {
                    <Fragment>
                        <label>Email</label> <br />
                        <input className="form-control" type="email" name="email" onChange={props.handleChange} required /> <br />
                    </Fragment>
                }
                {
                    <Fragment>
                        <label>DOB</label> <br />
                        <input className="form-control" type="date" name="dob" onChange={props.handleChange} required /> <br />
                    </Fragment>
                }
                {
                    props.numberData.map(ip => <Fragment key={ip}>
                        <label>{ip}</label><br />
                        <input className="form-control" type="number" name={ip} onChange={props.handleChange} required /><br />
                    </Fragment>)
                }
                <button className="btn btn-primary">Submit</button>
            </form >
        </section >

    </Fragment>
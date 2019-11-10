import React, { Fragment } from 'react';
import '../App.css';
import { Header } from './Header';

export const TotalEmployees = props => {
   const updatedData = Object.keys(props.editEmployee).filter(ip => {
       return(ip !== "sapId")
    })
    return (
        <div>
            <Header />
            <section className="container">
                <h1 onClick={props.displayAllEmployees}>Employees in HCL</h1>
                {
                    Object.keys(props.editEmployee).length !== 0 ? <section className="container col-4"><form className="form-control-lg" onSubmit={props.updateEmployee}>
                        {
                            updatedData.map(ip => <Fragment key={ip}>
                                <label>{ip}</label><br />
                                <input className="form-control" type="text" name={ip} onChange={props.handleChange} defaultValue={props.editEmployee[ip]} /><br />
                            </Fragment>
                            )
                        }
                        <button className="btn btn-primary">Submit</button>
                    </form>
                    </section> :
                        props.employees.length !== 0 ?
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        {
                                            Object.keys(props.employees[0]).map(head => <th key={head}>
                                                {head}
                                            </th>
                                            )
                                        }
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.employees.map(obj => {
                                            return (
                                                <tr key={obj.sapId}>
                                                    {
                                                        Object.values(obj).map((details,i) => {
                                                            return (
                                                                <td key={i}>
                                                                    {details}
                                                                </td>
                                                            )
                                                        }
                                                        )
                                                    }
                                                    <td><button className="btn btn-info" onClick={props.handleEdit(obj.sapId)}>Edit</button></td>
                                                    <td><button className="btn btn-danger" onClick={props.handleDelete(obj.sapId)}>Delete</button></td>
                                                </tr>)
                                        })
                                    }
                                </tbody>
                            </table> : <h4>No employees</h4>
                }
            </section >
        </div>
    )
}
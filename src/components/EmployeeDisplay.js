import React from 'react';
import '../App.css';
import { Header } from './Header';

export const EmployeeDisplay = props => <>
    <Header /><br />
    <section className="container col-4 offset-4">
        <form className="input-group" onSubmit={props.displayEmployee}>
            <input
                type="number"
                name="Sap-Id"
                placeholder="Search here"
                onChange={props.handleChange}
                required
            />
            <section className="input-group-append">
                <button
                    className="btn btn-secondary"
                >
                    Search
              </button>
            </section>
        </form>
    </section>
    {
        Object.keys(props.employee).length !== 0 ? <section className="container col-4"><h1>Employee Details</h1><table className="table table-bordered">
            <thead className="table-dark">
                {
                    <tr>
                        <th>
                            Description
                        </th>
                        <th>
                            Values
                        </th>
                    </tr>
                }
            </thead>
            <tbody>
                {
                    Object.keys(props.employee).map((heading, i) => <tr key={heading}>
                        <td>
                            {heading}
                        </td>
                        {
                            <td>
                                {Object.values(props.employee)[i]}
                            </td>
                        }
                    </tr>)
                }
            </tbody>
        </table>
        </section> : <h4>No Employee found</h4>

    }
</>
import React from "react";

function Table(){
    return (
        <div className="container">
            <h1 className="Heading">Student Enrollment Table</h1>
            <table className="table table-striped">
             <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Student Name</th>
                    <th>Enrolled Course</th>
                    <th>Session</th>
                    <th>Action</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td>1</td>
                    <td>Shadrak</td>
                    <td>React JS</td>
                    <td>January</td>
                    <td><button className="btn btn-info">info</button>
                    <button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Harish</td>
                    <td>React JS</td>
                    <td>January</td>
                    <td><button className="btn btn-info">info</button>
                    <button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Naresh</td>
                    <td>React JS</td>
                    <td>January</td>
                    <td><button className="btn btn-info">info</button>
                    <button className="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Shalom</td>
                    <td>React JS</td>
                    <td>January</td>
                    <td><button className="btn btn-info">info</button>
                    <button className="btn btn-danger">Delete</button></td>
                </tr>
             </tbody>
            </table>
        </div>
    )


}
export default Table;
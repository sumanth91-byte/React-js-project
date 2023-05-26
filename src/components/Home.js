import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const HeaderStyle = {
    width: "100%",
    height: "900px",
    backgroundImage: `url("https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignItems: 'center',
    justifyContent: 'center',

}

function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/users`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        const conf = window.confirm("Do you want to delete ?");
        if (conf) {
            axios.delete('http://localhost:3000/users/' + id)
                .then(res => {
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }
    }

    const logout = (e) => {
        const conf = window.confirm("Do you want to Logout ?");
        if (conf) {
            navigate('/')
            window.location.reload();
        }
    }

    return (
        <header style={HeaderStyle}>
            <div className='container'>
                <div className='btn-group btn-group-lg w-100' role='group' aria-label='....'>
                    <button className='btn btn-info w-100 active'>Empolyee</button>
                    <button className='btn btn-info w-100' onClick={() => navigate('/create')}>Create +</button>
                    <button type="button" className="btn btn-info w-100" onClick={logout}>
                        Log Out
                    </button>
                </div>
                <div className='container' style={{ marginTop: "10px" }}>
                    <div className="form-div">
                        <table className="table table-bordered table-striped table-hover table-responsive">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Sex</th>
                                    <th>DOB</th>
                                    <th>Salary</th>
                                    <th>Department</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                                {data.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.sex}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.salary}</td>
                                        <td>{user.department}</td>
                                        <td>
                                            <Link className="text-decoration-none btn btn-sm btn-success" to={`/edit/${user.id}`}>Edit</Link>
                                            <button className="text-decoration-none btn btn-sm btn-danger mx-1"
                                                onClick={() => handleDelete(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home

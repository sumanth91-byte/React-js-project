import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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


function Edit() {


    const { id } = useParams();
    const [values, setValues] = useState({
        id: id,
        name: '',
        sex: '',
        dob: '',
        salary: '',
        department: ''
    })

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => {
                setValues({ ...values, name: res.data.name, sex: res.data.sex, dob: res.data.dob, salary: res.data.salary, department: res.data.department })
            })
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/users/' + id, values)
            .then(res => {
                navigate('/home');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    // const goBack= (e) => {
    //     e.preventDefault();
    //     window.history.back();
    // }

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
                    <button className='btn btn-info w-100 active' onClick={() => navigate('/home')}>Empolyee</button>
                    <button className='btn btn-info w-100' onClick={() => navigate('/create')}>Create +</button>
                    <button type="button" className="btn btn-info w-100" onClick={logout}>
                        Log Out
                    </button>
                </div>
                <div className='d-flex' style={{ justifyContent: "center", alignItems: 'center', padding: 'rem' }}>
                    <form onSubmit={handleSubmit}>
                        <h1>Edit Employee Data</h1>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' className='form-control' placeholder='Enter Name' required
                                value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="sex">Sex</label>
                            <select type="text" name='sex' className='form-control' placeholder='Enter M or F' required
                                value={values.sex} onChange={e => setValues({ ...values, sex: e.target.value })}>
                                <option value={''}>None</option>
                                <option value={'M'}>M</option>
                                <option value={'F'}>F</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dob">DOB</label>
                            <input type="date" name='dob' className='form-control' placeholder='Enter dob' required
                                value={values.dob} onChange={e => setValues({ ...values, dob: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="salary">Salary</label>
                            <input type="number" name='salary' className='form-control' required
                                value={values.salary} onChange={e => setValues({ ...values, salary: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="department">Department</label>
                            <select type="text" name='department' className='form-control' required
                                value={values.department} onChange={e => setValues({ ...values, department: e.target.value })}>
                                <option value={''}>Select One</option>
                                <option value={'HR'}>HR</option>
                                <option value={'Sales'}>Sales</option>
                                <option value={'Accounts'}>Accounts</option>
                            </select>
                        </div><br />
                        <button className='btn btn-success'>Update</button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Edit;
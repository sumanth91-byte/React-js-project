import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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

function Create() {
  const [inputData, setInputData] = useState({name:'', sex:'', dob:'', salary:'', department:''})

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/users', inputData)
    .then(res => {
      navigate('/home');
      window.location.reload();
    })
    .catch(err => console.log(err));
  }

//   const goBack= (e) => {
//     e.preventDefault();
//     window.history.back();
//   }

const logout= (e) => {
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
                <button className='btn btn-info w-100 active'  onClick={() => navigate('/home')}>Empolyee</button>
                <button className='btn btn-info w-100' onClick={() => navigate('/create')}>Create +</button>
                <button type="button" className="btn btn-info w-100" onClick={logout}>
                    Log Out
                </button>
            </div>
            <div className='d-flex' style={{ justifyContent: "center", alignItems:'center',padding:'rem' }}>
            <form onSubmit={handleSubmit}>
            <h1 >Add New Employee Data</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Name' required
                onChange={e => setInputData({...inputData, name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="sex">Sex</label>
                <select type="text" name='sex' className='form-control' placeholder='Enter M or F' required
                onChange={e => setInputData({...inputData, sex: e.target.value})}>
                <option value={''}>None</option>
                <option value={'M'}>M</option>
                <option value={'F'}>F</option>
                </select>
            </div>
            <div>
                <label htmlFor="dob">DOB</label>
                <input type="date" name='dob' className='form-control' placeholder='Enter dob' required
                onChange={e => setInputData({...inputData, dob: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="salary">Salary</label>
                <input type="text" name='salary' className='form-control' placeholder='Enter Salary' required
                onChange={e => setInputData({...inputData, salary: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="department">Department</label>
                <select type="text" name='department' className='form-control' required
                onChange={e => setInputData({...inputData, department: e.target.value})}>
                <option value={''}>Select One</option>
                <option value={'HR'}>HR</option>
                <option value={'Sales'}>Sales</option>
                <option value={'Accounts'}>Accounts</option>
                </select>
            </div><br />
            <button className='btn btn-success'>Add</button>
            </form>
        </div>
        </div>
    </header>
  )
}

export default Create;
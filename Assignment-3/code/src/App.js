import React from 'react';
import './App.css';

const employee = {
  name: 'Rajkumar Shaw',
  emp_id: 100034,
  appointment: '10:30 AM (01/04/2022)',
  email: 'rajkumarshaw624@gmail.com',
  phone: '+91 9708493575',
  Status: 'In Process',
  Door: 'Mark',
  Time: '10:30 (01/04/2022)',
  product_name: 'Boltaart Bosbessen',
  location: 'Jharkhand, India',
  bloodGroup: 'A+',
  age: 26,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
       }
var arrow="<"
var arrow2=">"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div>
      <ul>
        <li><a href="/">{arrow}</a></li>
        <li><a href="/">{employee.name}<br/>{employee.emp_id}</a></li>
        <li><a href="/"><button type="submit">Print</button></a></li>
      </ul>
    </div>
      <div className='customer-info'>
           <label htmlFor="/">Appointment: </label>{employee.appointment}<br/>
           <label htmlFor="/">Email Id: </label>{employee.email}<br/>
           <label htmlFor="/">Phone No: </label>{employee.phone}
      </div>
      <div className='order-info'>
          <table>
            <tr>
              <th>Status</th>
              <th>Door</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>⚫ {employee.Status}</td>
              <td>{employee.Door}</td>
              <td>{employee.Time}</td>
            </tr>
          </table>
      </div>
      <div className='product-list'>
        <div className='check-box'><input type="checkbox" name="checkbox" id="checkbox" /></div>
        <div className='pimg'>
          <img src={employee.profileImg}  alt={employee.name}/>
        </div>
        <div className='pname'>
          <p>{employee.product_name}</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Sed quasi sunt inventore aliquam totam incidunt voluptas, 
            assumenda perferendis ipsum unde officiis alias! Quis sed nihil
             cupiditate fugit ipsa consequatur ut!</p>
        </div>
        <div className='arrow2'><p>{arrow2}</p></div>
      </div>
    </div>
  );
}

export default App;

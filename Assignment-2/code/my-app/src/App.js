
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <div className='main-div'>
    <img className='profile-img' src={employee.profileImg}  alt={employee.name}/>
    <div className='detils'>
      <h2>Name : {employee.name}</h2>
      <h2>Address : {employee.location}</h2>
      <h2>BG : {employee.bloodGroup}</h2>
      <h2>Age : {employee.age}</h2>
    </div>
  </div>
</div>
)
}



export default App;

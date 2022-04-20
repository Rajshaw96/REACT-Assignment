import React, { useEffect, useState } from 'react';
import './Postview.css';
const Postview=()=> {
  const [data, setData] = useState([]);
  const fetchURL = "http://localhost:3004/user";
  const getData = async () => {
    const response = await fetch(fetchURL);
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="site-container">

     <>
    <div className="tophader">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png" alt="Logo" />
      <img className='camra-icon' src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png" alt="Logo" />  
    </div>
    {data.map((item)=>(
      <div className='post'>
        <div className='mainpost'>
          <div className='rightside'>
            <h5>{item.name}</h5>
            <p>{item.location}</p>
          </div>
          <div className='leftside'><h1><strong>...</strong></h1></div>
        </div>
        
        <div className="post-image">
          <img src={item.PostImage} alt={item.name} />
        </div>

        <div className='mainpost'>
            <div className="rightside">
              <p><span>❤️</span> <span>🔗</span></p><br/>
              <p>{item.likes} likes</p><br/>
              <p>{item.description}</p>
            </div>
            <div className="leftside"><p>{item.date}</p></div>
        </div>
      </div>
      ))}
      </> 
    </div>
  );
}

export default Postview;

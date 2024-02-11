import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import './App.css'; // Assuming you have some CSS for styling
import angrycatImage from "./img/angrycat.png"
import timeimage from "./img/time.jpg"

const TimePage = ()=>{
    const [choseNo, setChoseNo] = useState(false);
    const navigate = useNavigate();
    const handleSorry = () => {
        setChoseNo(false);
      }
    
      const handleYes = ()=>{
        navigate('/muacks')
      }
    
      const handleNo = () => {
        setChoseNo(true);
      }
    return(
        <div className='container'>
        {!choseNo &&
        <div className="image-container">
            <img src={timeimage} className="opened-door" ></img>
            <div className='buttons'>
                <button onClick={handleYes} className='yes-button'>Yes</button>
                <button onClick={handleNo} className='no-button'>No</button>
            </div>
        </div>
        }
        {choseNo &&
            <div>
              <div className='image-container'>
                <img src={angrycatImage} className="angrycat" />
              </div>
                <button className='sorry-button' onClick={handleSorry}>I am sorry!!</button>
              </div>}
        </div>
    )
}

export default TimePage;
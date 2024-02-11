import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css'; // Assuming you have some CSS for styling
import openedDoorImage from './img/date.jpg';
import angrycatImage from './img/angrycat.png';

const HomePage = () => {
  const [knocked, setKnocked] = useState(false);
  const [doorOpened, setDoorOpened] = useState(false);
  const [choseNo, setChoseNo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger the door knocking animation when the component mounts
    setKnocked(true);
    setTimeout(() => {
      setKnocked(false);
    }, 1000); // Change the time according to your animation duration

    // Set up continuous blinking effect for "Knock Knock" text
    const interval = setInterval(() => {
      setKnocked((prevKnocked) => !prevKnocked);
    }, 1000); // Change the time according to your blinking duration

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const knockDoor = () => {
    setKnocked(true);
    setDoorOpened(true);
  };

  const handleSorry = () => {
    setChoseNo(false);
  }

  const handleYes = ()=>{
    navigate('/time')
  }

  const handleNo = () => {
    setChoseNo(true);
  }

  return (
    <div className="container">
      {!doorOpened && (
        <div>
          <div className="knock-knock">
            <p className={`sound ${knocked ? 'blink' : ''}`}>Knock Knock!</p>
          </div>
          <div className="door-container">
            <div className={`door ${doorOpened ? 'open' : ''}`}></div>
            <button onClick={knockDoor} className="door-button">
              Open Door
            </button>
          </div>
        </div>
      )}
      {doorOpened &&
        <div>
          {!choseNo &&
          <div>
            <div className='image-container'>
              <img src={openedDoorImage} alt="Opened Door" className="opened-door" />
              </div>
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
      }
    </div>
  );
}

export default HomePage;

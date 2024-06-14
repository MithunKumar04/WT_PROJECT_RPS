import React, { useState } from 'react';
import styled from "styled-components";
import image1 from './image2.png';
const Page2 = () => {const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (event) => {setSelectedDate(event.target.value);}
  return (
    <>
      <Container1>
      <div><img style={{height:"100px",width:"100px"}}src={image1} alt="Image 1" className="button-image" /></div>
      <div><h1 style={{ marginBottom: '30px' }}>Diesel Price Streamer</h1></div>
      <Container>
      <div > <h1 style={{ marginBottom: '30px' }}>Select a Date</h1>
        <input style={{ marginBottom: '30px' }}type="date" value={selectedDate} onChange={handleDateChange} />
        <p>Selected Date: {selectedDate}</p>
      </div>
      </Container>
      </Container1>
    </>
  );
};
const Container1 = styled.div`height: 100vh;width: 100vw;display: flex;gap: 1rem;background-color: #131324;color: white`;
const Container = styled.div`height: 90vh;width: 40vw;display: flex;flex-direction: column;justify-content: center;gap: 1rem;
align-items: center;background-color: #131324;color: white;`;
export default Page2;
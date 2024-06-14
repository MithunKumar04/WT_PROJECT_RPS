import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from './image3.png';
const Page3 = () => { const [selectedDate, setSelectedDate] = useState('');
    const [price, setPrice] = useState(null);const [error, setError] = useState(null);
    const apiKey = '5171f7b9fd3a2dafbbf4a3e011929917';const baseUrl = 'https://api.oilpriceapi.com/v1/prices/latest';
    const handleDateChange = (event) => {setSelectedDate(event.target.value);};
    const fetchOilPrice = async () => {
    try {const response = await fetch(`${baseUrl}?date=${selectedDate}`, {headers: {'Authorization': `Token ${apiKey}`,'Content-Type': 'application/json',},});
    if (!response.ok) {throw new Error('Network response was not ok ' + response.statusText);}
        const data = await response.json();setPrice(data);setError(null);
        } catch (error) {setError(error.message); setPrice(null);}
    };
    const handleSubmit = (event) => {event.preventDefault(); fetchOilPrice();};
    return (
        <>
            <Container1>
            <div><img style={{ height: '100px', width: '100px' }}src={image1}alt="Image 1"className="button-image"/></div>
            <div><h1 style={{ marginBottom: '30px' }}>Oil Price Streamer</h1></div>
            <Container>
                <div><h1 style={{ marginBottom: '30px' }}>Select a Date</h1><form onSubmit={handleSubmit}>
                    <input style={{ marginBottom: '30px' }}type="date" value={selectedDate}onChange={handleDateChange}/>
                    <button type="submit">Get Oil Price</button>
                    </form><p>Selected Date: {selectedDate}</p>{price && <pre>{JSON.stringify(price, null, 2)}</pre>}{error && <p style={{ color: 'red' }}>Error: {error}</p>}
                    </div>
            </Container>
            </Container1>
        </>
    );
};
const Container1 = styled.div`height: 100vh;width: 100vw;display: flex;gap: 1rem;background-color: #131324;color: white`;
const Container = styled.div`height: 90vh;width: 40vw;display: flex;flex-direction: column;justify-content: center;gap: 1rem;`
export default Page3;

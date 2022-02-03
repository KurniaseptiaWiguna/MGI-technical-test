import React, { useState,useEffect } from 'react';
import Photo from '../components/Photo'
import Navigationbar from '../components/Navbar';
import { Container,Row } from 'react-bootstrap';
function Home() {
    const [data,setData] = useState([]);
    const getData = async () => {
        const response = await JSON.parse(localStorage.getItem("photos"))
        setData(response)
    }
    useEffect(() => {
      getData()
    }, []);
    
  return (
    <div >
        <Navigationbar/>
        <Container >
            
                <Photo/>
        </Container>
        
    </div>
    );
}

export default Home;

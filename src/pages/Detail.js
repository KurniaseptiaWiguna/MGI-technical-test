import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Container,Row,Col, Button } from 'react-bootstrap';
import Navigationbar from '../components/Navbar'
function Detail() {
    const params = useParams();
    const [action, setAction] = useState(null)
        const response = JSON.parse(localStorage.getItem("photos"))
        const detail = response.filter((item) => item.id == params.id)
        // setData(response.filter((item) => item.id == 16))
        console.log(detail)
    
    const addFavorite = () => {
        let data = JSON.parse(localStorage.getItem("favorites"))
        const newData = {
            id:params.id
        }
        data.push(newData)
        localStorage.setItem("favorites",JSON.stringify(data))
        check();
    }
    const removeFavorite = () => {
        let data = JSON.parse(localStorage.getItem("favorites"))
        let newData = data.filter(item => item.id !== params.id)
        localStorage.setItem("favorites",JSON.stringify(newData))
        check();
    }
    const check = () => {
        let data = JSON.parse(localStorage.getItem("favorites"));
        const checking = data.filter(item => item.id == params.id)
        if(checking.length > 0){
            const button2 = (<Button variant='danger' onClick={removeFavorite}>remove favorite</Button>)
         setAction(button2)
            
        }else{
            const button = ( <Button onClick={addFavorite}>Add to favorite</Button>)
            setAction(button)
        }
        
    }
    useEffect(() => {
      check()
    }, []);
    
    
  return <div>
      <Navigationbar/>
      <Container>
          <Row>
          {
                detail.map((item) => (<>
              <Col>
              
                    <div key={item.id}>
                        <img src={item.url} style={{width:"450px",borderRadius:"50px"}}/>
                        <h2 className='fw-bold mt-3'>{item.title}</h2>
                        {action && action}
                    </div>
            
              </Col>
              </>
                  ))
                }
          </Row>
      </Container>
      
  </div>;
}

export default Detail;

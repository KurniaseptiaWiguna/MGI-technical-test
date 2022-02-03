import {useState,useEffect} from 'react';
import {Container,Row,Col,Stack,Button,Form,Nav} from 'react-bootstrap'
import {NavLink, useHistory} from 'react-router-dom'
import Navigationbar from '../components/Navbar'
function Favorite() {
    const route = useHistory();
    const [data,setData] = useState([]);
    
    const [title,setTitle] = useState("");

    
    const filteringData = () => {
        let res = [];
        const photos = JSON.parse(localStorage.getItem("photos"))
        const favorite = JSON.parse(localStorage.getItem("favorites"))
        for(let arr in photos){
            for(let filter in favorite){
                if(photos[arr].id == favorite[filter].id){
                    res.push(photos[arr])
                }
            }
        }
        return res
    }

    useEffect(() => {
      setData(filteringData())
      console.log(data)
    }, []);
    
  return <>
    <Navigationbar />
    <Container>
    <Row>
      { data.length >0 ? 
            data.map((item) => (
                
                <Col className="my-3" >
                    <NavLink to={"/detail/"+item.id}>
                    <img src={item.thumbnailUrl} style={{width:"200px",borderRadius:"30px"}}/>
                    <p className="mt-1">{item.title}</p>
                    </NavLink>
                </Col>
            
            )
            )
        
            : <>
                <h1 className="mt-5">No data found</h1>
            </>
        }
        </Row>
    </Container>
  </>;
}

export default Favorite;

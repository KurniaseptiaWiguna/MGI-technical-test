import {useState,useEffect} from 'react';
import {Container,Row,Col,Stack,Button,Form,Nav} from 'react-bootstrap'
import {NavLink, useHistory} from 'react-router-dom'
function Photo(photo,id) {
    const route = useHistory();
    const [data,setData] = useState([]);
    const [title,setTitle] = useState("");

    
    const getData = async () => {
        const response = await JSON.parse(localStorage.getItem("photos"))
        setData(response)
    }
    const search = async (e) => {
        e.preventDefault();
        try {
            const response = await JSON.parse(localStorage.getItem("photos"))
            const filter =await response.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()))
            setData(filter)
        } catch (error) {
          console.log(error)  
        }
    }
    useEffect(() => {
      getData()
    }, []);
  return( 
    <>  
        <Row className="mb-3">
            <Col></Col>
            <Col>
                <Form onSubmit={search}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control type="text" placeholder="search photo name" onChange={ e => setTitle(e.target.value)} value={title || ''} required/>
                        <Button variant="info" type="submit">
                                
                            Search
                        </Button>
                    </Stack>
                </Form>
            </Col>
        </Row>
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
                <p>try another name</p>
            </>
        }
        </Row>
    </>
    );
}

export default Photo;

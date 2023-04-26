import {React,useState,useEffect} from 'react'
import PlantView from './PlantView'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

    var [plantList,setPlant]=useState([])
    const fetchData=async()=>{
       const result= await fetch('/plant.json')
       result.json().then(
        data=>{
            setPlant(data.plants)
        }
       )
    }
    console.log(plantList);

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <Row >
        {
            plantList.map(item=>(
                <Col className='p-5 ' lg={4} md={6}>
                <PlantView plantdata={item}/>
                </Col>
            ))
        }

    </Row>
  )
}

export default Home
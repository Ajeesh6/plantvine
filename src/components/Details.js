import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Review from './Review';

function Details() {

    const params = useParams()
    var [plantList, setPlant] = useState([])
    const fetchData = async () => {
        const result = await fetch('/plant.json')
        result.json().then(
            data => {
                setPlant(data.plants)
            }
        )
    }
    console.log(plantList);

    const plant = plantList.find(item => item.id == params.id)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {
                plant ? (<Row className='mb-2'>
                    <Col lg={5} md={5}  className='mt-4 mb-4'>
                        <img src={plant.imageUrl} style={{ height: '', width: '100%'}} />
                    </Col>
                    <Col lg={7} md={7} className='p-4 '>
                        <div className='mb-4  mt-4'><h2>{plant.title}</h2></div>
                        <div><p>{plant.description}</p></div>
                        <div className='mt-4'>
                        <h4>care</h4>
                        <p><span style={{}}>Light :</span> {plant.care.Light}</p>
                        <p>Water : {plant.care.Water}</p>
                        <p>Temperature : {plant.care.Temperature}</p>
                        <p>Humidity : {plant.care.Humidity}</p>
                        <p>Pet Friendly : {plant.care.PetFriendly}</p>

                        </div>
                        <Review  reviewData={plant.reviews} />
                    </Col>
                    
                </Row>) : ""
            }
        </>

    )
}

export default Details
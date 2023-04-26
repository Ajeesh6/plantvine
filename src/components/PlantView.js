import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Home.css'

function PlantView({ plantdata }) {
    

    return (
        <>
            <Link style={{textDecoration:'none'}} to={`/view-plant/${plantdata.id}`}>

                <Card className='text-center ce container' style={{ width: '18rem',height:'100%' }}>
                    <Card.Img variant="top" src={plantdata.imageUrl} />
                    <Card.Body >
                        <Card.Title>{plantdata.title}</Card.Title>
                        <Card.Text>
    
                        </Card.Text>
    
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default PlantView
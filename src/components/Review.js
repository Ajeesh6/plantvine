import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Review({ reviewData }) {
  return (
    <>

      <Accordion className="mt-4 mb-4" defaultActiveKey="0">

        <Accordion.Item eventKey="1">
          <Accordion.Header><h6>Reviews</h6></Accordion.Header>
          <Accordion.Body>
            {
              reviewData.map(item => (
                
                <div className='py-1'>
                  <Card body  style={{ width: '' } }>
                    <p>{item.name} </p>
                    <p>{item.date}</p>
                    <p>{item.comments}</p>
  
                  </Card>
                </div>

              ))


            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default Review
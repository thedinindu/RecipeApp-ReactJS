import React from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './resipeStyle.css'

const Recipe = ({title, calories, image, url, source}) => {
    var floorCal = Math.floor(calories)
    return(
        <div className="text-center">
            <Card border="light" style={{ borderRadius: '20px', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)' }}>
            <Card.Img variant='top' src={image} style={{ height: '250px', borderRadius: '20px'}}/>
            <Card.Body>
                <Card.Title><h3>{title}</h3></Card.Title>
                <Card.Text>Calories - {floorCal}</Card.Text>
                <Card.Text>Source - {source}</Card.Text>
                <Button className="btn btn-default" variant="primary" href={url} target="_blank">View Recipe</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Recipe
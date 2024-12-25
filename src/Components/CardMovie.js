import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

const CardMovie=({el})=>{
  const [isShowMore, setShowMore] = useState(false)
    return (
        <Card className ='card' style={{ width: '18rem', backgroundColor: 'black', color: 'white' }}>
          <Card.Img variant="top" src={el.posterURL} style={{width :"286px", height :"406px" }} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
                {isShowMore ? el.description : el.description.slice(0,80) } 
                <button className={isShowMore ? 'ahmer' : 'akther'} style={{border: "none",backgroundColor: "white"}}  onClick={()=> setShowMore(!isShowMore)}>{isShowMore ? "show Less" : "...show More "}</button>
            </Card.Text>
            <Rating name="read-only" value={el.rating} readOnly />
            
          </Card.Body>
        </Card>
      )
}

export default CardMovie
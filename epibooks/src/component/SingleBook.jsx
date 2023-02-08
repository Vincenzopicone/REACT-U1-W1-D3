import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';

class SingleCard extends Component {
  state= {
    selected:""
}

    render () {
    return (      
                  <Card className='CardEpibook col-sm-6 col-md-3 col-lg-2 m-2 shadow p-0 mb-5 bg-body-tertiary rounded' key={this.props.element.asin} onClick={()=>this.handleClick()}>
                  <Card.Img variant="top" style={{ height:'50%' }} src={this.props.element.img}/>
                  <Card.Body className='d-flex flex-column justify-content-between' >
                   <Card.Title>{this.props.element.title}</Card.Title>
                    <Card.Text className='fw-bold fs-4'>{this.props.element.price.toFixed(2)} €</Card.Text>
                    <Button variant="dark">Acquista</Button>
                  </Card.Body>
                </Card>

    )}
    
    handleClick () {
      this.setState({selected:true})
      
    }
    
  }
 
  export default SingleCard;
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Fantasy from '../books/fantasy.json';

function CardEpibook() {
  return (
    <section className='row d-flex justify-content-center p-3'>
        <h2 className='text-center m-4'> FANTASY </h2>
        {Fantasy.map((book)=> {
            return (
                <Card className='CardEpibook col-2 m-2 shadow p-0 mb-5 bg-body-tertiary rounded' key={book.asin}>
                <Card.Img variant="top" style={{ height:'50%' }} src={book.img}/>
                <Card.Body className='d-flex flex-column justify-content-between' >
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text className='fw-bold'>{book.price.toFixed(2)} €</Card.Text>
                  <Button variant="primary">Acquista</Button>
                </Card.Body>
              </Card>
            )
        })}

    </section>
  )}

export default CardEpibook;
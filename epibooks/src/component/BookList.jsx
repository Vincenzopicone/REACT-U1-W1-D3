import SingleCard from "./SingleBook";
import { Component } from "react";



class BookList extends Component {
    state= {
        query:""
    }
    handleChange(event) {
        this.setState({
            query : event.target.value
        })
    }
    render () {
        return this.props.category.map(book => <SingleCard element={book}/>)
        /* this.props.category.filter((book)=> {
        return book.title.includes.toLowerCase(this.state.query.toLowerCase) */
     
}
}

export default BookList;
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getBookQuery} from '../queries/queries'

class BookDetails extends Component {
  displayBooksDetails(){
        var { book } = this.props.data;
        if(!book){
            return (
                <div>No Book selected...</div>
            )
        }
        else {
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All Books by this author</p>
                    <ul className="other-books">
                        {book.author.books.map(item => {
                            return <li key={item.id} >{item.name}</li>
                        })}
                    </ul>
                </div>
            )
        }
  }

  render() {
    return (
      <div id="book-details">
        {this.displayBooksDetails()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './book.js'

export default class Shelf extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book 
                                    book = {book}
                                    onUpdateBook = {this.props.onUpdateBook}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Book from './book.js'

export default class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li>
                                <Book 
                                    url={book.url}
                                    title={book.title}
                                    author={book.author}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
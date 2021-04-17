import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Book from './book'

export class SearchBooks extends Component {
    static propTypes = {
        onSearchBook: PropTypes.func,
        onUpdateBook: PropTypes.func,
        searchBooks: PropTypes.array.isRequired
    }
    state = {
        query: ''
    }
    nextPath = (props, path) => {
        this.props.history.push(path)
    }
    searchBook = (e) => {
        var searchValue = e.target.value
        this.setState({
            query: searchValue
        })
        this.props.onSearchBook(searchValue)
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.nextPath(this.props, "/")}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={this.searchBook}/>
                    </div>
                </div>
                {this.props.searchBooks.length === 0?
                (
                    <div className="search-books-results">
                        <h3>Search result is empty!</h3>
                    </div>
                ) 
                : (
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.props.searchBooks.map((book) => {
                                return <li key={book.id}>
                                    <Book 
                                        book={book} 
                                        onUpdateBook={this.props.onUpdateBook}
                                    />
                                </li>
                            })}
                        </ol>
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(SearchBooks)
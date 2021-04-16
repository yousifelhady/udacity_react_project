import React from 'react'
import PropTypes from 'prop-types'
import Shelf from './shelf.js'
import { withRouter } from 'react-router-dom'

export class ListBooks extends React.Component {
    static propTypes = {
        onUpdateBook: PropTypes.func,
        books: PropTypes.array.isRequired
    }
    nextPath(path) {
        this.props.history.push(path)
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf 
                            name={"Currently Reading"}
                            books={this.props.books.filter((book) => book.shelf === 'currentlyReading')}
                            onUpdateBook={this.props.onUpdateBook}
                        />
                        <Shelf 
                            name={"Want to read"}
                            books={this.props.books.filter((book) => book.shelf === 'wantToRead')}
                            onUpdateBook={this.props.onUpdateBook}
                        />
                        <Shelf 
                            name={"Read"}
                            books={this.props.books.filter((book) => book.shelf === 'read')}
                            onUpdateBook={this.props.onUpdateBook}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.nextPath("/search")}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default withRouter(ListBooks)
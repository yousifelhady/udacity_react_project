import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func
    }
    constructAuthors = () => {
        let authors = null
        try {
            authors = this.book.authors
            var authorsString = ""
            authors.forEach(element => {
                authorsString += element + ", "
            });
            return authorsString.trimEnd().slice(0, -1)
        }
        catch {
            return ""
        }
    }
    getBookThumbnail = function() {
        let thumbnailLink = null
        try {
            thumbnailLink = this.book.imageLinks.thumbnail
            console.log(thumbnailLink)
        }
        catch(err) {
            thumbnailLink = ""
        }
        return thumbnailLink
    }
    moveBook = (e) => {
        const shelf = e.target.value
        this.props.onUpdateBook(this.props.book, shelf)
    }
    render() {
        const {book} = this.props
        return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.getBookThumbnail()})` }}></div>
                            <div className="book-shelf-changer">
                                <select defaultValue={book.shelf} onChange={this.moveBook}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                    <div className="book-authors">{this.constructAuthors}</div>
                </div>
        )
    }
}
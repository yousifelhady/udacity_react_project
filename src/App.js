import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  }
  componentDidMount() {
    this.getAllBooks()
  }
  async getAllBooks() {
    const books = await BooksAPI.getAll()
    console.log(books)
    this.setState({
      books
    })
  }
  updateBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf)
    var found = this.checkIfBookFound(book)
    if (found) {
      this.setState({
        books: this.state.books.map((_book) => {
          if (_book.id === book.id) {
            _book.shelf = shelf
          }
          return _book
        })
      })
    } else {
      book.shelf = shelf
      this.setState({
        books: [...this.state.books, book]
      })
    }
  }
  checkIfBookFound = (book) => {
    var found = false
    for (let i=0; i < this.state.books.length; i++) {
      if (this.state.books[i].id === book.id)
      {
        found = true
        break
      }
    }
    return found
  }
  searchBook = async (query) => {
    if (query === "") {
      this.setState({
        searchBooks: []
      })
    } else {
      const searchBooks = await BooksAPI.search(query)
      if (Array.isArray(searchBooks)) {
        this.setState({
          searchBooks
        })
      }
      else {
        this.setState({
          searchBooks: []
        })
      }
    }
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<ListBooks books={this.state.books} onUpdateBook={this.updateBook}/>)}></Route>
        <Route path="/search" render={() => (<SearchBooks searchBooks={this.state.searchBooks} onSearchBook={this.searchBook} onUpdateBook={this.updateBook}/>)}></Route>
      </div>
    )
  }
}

export default BooksApp
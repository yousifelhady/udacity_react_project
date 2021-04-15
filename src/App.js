import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
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
    this.setState({
      books: this.state.books.map((_book) => {
        if (_book.id === book.id) {
          _book.shelf = shelf
        }
        return _book
      })
    })
  }
  render() {
    return (
      <div className="app">
        {console.log(this.state)}
        <Route exact path="/" render={() => (<ListBooks books={this.state.books} onUpdateBook={this.updateBook}/>)}></Route>
        <Route path="/search" render={() => (<SearchBooks />)}></Route>
      </div>
    )
  }
}

export default BooksApp
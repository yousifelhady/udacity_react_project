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
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<ListBooks books={this.state.books}/>)}></Route>
        <Route path="/search" component={SearchBooks}></Route>
      </div>
    )
  }
}

export default BooksApp
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
    const allBooks = await BooksAPI.getAll()
    console.log(allBooks)
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks}></Route>
        <Route path="/search" component={SearchBooks}></Route>
      </div>
    )
  }
}

export default BooksApp
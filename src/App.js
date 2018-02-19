import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Col, Row } from 'react-bootstrap'
import Header from './components/Header'
import Books from './components/Books'
import SearchInput from './components/SearchInput'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      text: 'Harry Potter'
    }
  }

  componentWillMount() {
    this.getBooks()
  }

  getBooks = () => {
    axios.request({
      methid: 'GET',
      url: `https://www.googleapis.com/books/v1/volumes?q=${this.state.text}`
    }).then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err.request))
  }

  handleSearch = (text) => {
    this.setState({ text })
    this.getBooks()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchInput value={this.state.text} onChange={this.handleSearch} />
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

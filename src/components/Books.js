import React from 'react'
import { Col, Row, Grid, PanelGroup, Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const Books = () => {
  let bookItems
  if (this.props.books) {
    bookItems = this.props.books.map((book) => {
      const { id } = book

      const {
        title, categories, authors,
        pageCount, publisher, publishDate,
        averageRating, description
      } = book.volumeInfo

      const { thumbnail } = book.volumeInfo.imageLinks
      const { buyLink } = book.saleInfo

      return (
        <Panel key={id} eventKey={id}>
          <Panel.Heading>
            <Panel.Title toggle>{title}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <Grid>
              <Row>
                <Col xs={3} md={3} lg={3}>
                  <img src={thumbnail} alt="presentation" />
                </Col>
                <Col xs={8} md={8} lg={8}>
                  <ListGroup>
                    <ListGroupItem><strong>Category: </strong>{categories}</ListGroupItem>
                    <ListGroupItem><strong>Authors: </strong>{authors}</ListGroupItem>
                    <ListGroupItem><strong>Publishers: </strong>{publisher}</ListGroupItem>
                    <ListGroupItem><strong>Publish Date: </strong>{publishDate}</ListGroupItem>
                    <ListGroupItem><strong>Page Count: </strong>{pageCount}</ListGroupItem>
                    <ListGroupItem><strong>Average Rating: </strong><span className="rating">{averageRating}</span></ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={11} md={11} lg={11}>
                  <h3>Book Description</h3>
                  {description}
                  <hr />
                  <Button href={buyLink} bsStyle="primary">Buy</Button>
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
        </Panel>

      )
    })
  }
  return (
    <PanelGroup accordion id="books">
      {bookItems}
    </PanelGroup>
  )
}

export default Books

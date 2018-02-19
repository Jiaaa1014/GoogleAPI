import React, { Component } from 'react'
import { Well, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class SearchInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired // eslint-disable-line react/forbid-prop-types
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  onSearch = () => this.props.onChange(this.state.value)
  render() {
    return (
      <Well>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Searching for"
          // onChange={this.onChange}
          onChange={e => this.setState({ value: e.target.value })
          }
          onKeyPress={(e) => {
            if (e.key === 'Enter') this.onSearch()
          }}
        />
      </Well>
    )
  }
}


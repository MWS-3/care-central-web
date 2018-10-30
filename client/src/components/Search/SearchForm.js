import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    data: {
      query: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  })

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};
    if(!data.query){
      errors.query = "No search text detected"
      console.log(errors);
    }
    return errors;
  }

  render() {

    const {data} = this.state;

    return (
          <form onSubmit={this.onSubmit}>
            <input 
            type="text"
            id="query"
            name="query"
            placeholder="Gabon Hospital"
            value={data.query}
            onChange={this.onChange}
            />
            <button>Search</button>
          </form>
    );
  }
}

export default SearchForm;

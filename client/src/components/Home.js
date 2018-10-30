import React, {Component} from 'react';
import SearchForm from './Search/SearchForm';
import "../App.css";

class Home extends Component {

  submit = data => {
    console.log(data);
  }

  render(){
    return (
      <div>
        <header className="App-header">
          <SearchForm submit={this.submit} />
        </header>
        {/* <footer className="App-footer">
        </footer> */}
      </div>
    )
  }
}
export default Home;
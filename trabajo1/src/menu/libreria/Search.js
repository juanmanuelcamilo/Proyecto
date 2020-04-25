import React, { Component } from 'react';

class Search extends Component{

  onChangeEvent = (e) => {
      const query = e.target.value.toString().toLowerCase();
      this.props.onsearch(query);
  }

  render(){
      return(
          <input type="text" onChange={this.onChangeEvent} />
      );
  }
}


export default Search
import React from "react";
import { Component } from "react";

import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}


// you want the most-parent component that cares about a particular piece of state to be a container

// app doesn't care when state changes (if you have everything in sub-components), so it should be a vanilla component, not a container

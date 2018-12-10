import React, { Component } from "react";
import "./HomePage.css";
import Section from "./Section/Section";
import News from './News/News';
import Context from "../../../../Context";

class HomePage extends Component {
  static contextType = Context;
  componentDidMount() {
    this.context.handleGetCart();
  }
  render() {
    return (
      <div>
        <News />
        <Section title="Sản phẩm nổi bật" />
        <Section title="Điện thoại" brand />
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from "react";
import "./HomePage.css";
import Section from "./Section/Section";
import News from './News/News';

class HomePage extends Component {
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

import React, { Component } from "react";
import Table from "./table"
import Input from "./input";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Input />
        <Table/>
      </div>
    );
  }
}

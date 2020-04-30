import React, { Component } from "react";
import Table from "./table";
import Input from "./input";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Input
          onPress={this.props.onPress}
          onChangeSearch={this.props.onChangeSearch}
          search={this.props.searchContent}//chuỗi
        />
        <Table notes={this.props.notes} />
      </div>
    );
  }
}

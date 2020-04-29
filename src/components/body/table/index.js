import React, { Component } from "react";
import styles from "./index.module.scss";
import { ReactComponent as PenIcon } from "../../../assets/img/pen.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/img/delete.svg";
export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Comtent</th>
            <th>Update Date</th>
          </tr>
          <tbody>
            <tr>
              <td>
                <div style={{ display: "flex", width: "70px" }}>
                  <PenIcon style={{fill:'blue'}} />
                  <DeleteIcon style={{fill:'red'}} />
                </div>
              </td>
              <td>show commit item</td>
              <td>Thu 6 ngay 13</td>
              <td>Thu 6 ngay 13</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

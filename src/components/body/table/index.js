import React, { Component } from "react";
import styles from "./index.module.scss";
import { ReactComponent as PenIcon } from "../../../assets/img/pen.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/img/delete.svg";
export default class Table extends Component {
  render() {
    const { notes } = this.props; //destructuring
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
            {
              notes.map((note) => {
                return (
                  <tr>
                    <td>
                      <div style={{ display: "flex", width: "70px" }}>
                        <PenIcon style={{ fill: "blue" }} />
                        <DeleteIcon style={{ fill: "red" }} />
                      </div>
                    </td>
                    <td>{note.title}</td>
                    <td>{note.content}</td>
                    <td>{note.tag}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

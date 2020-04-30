import React, { Component } from "react";
import styles from "./index.module.scss";
export default class NewNote extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.onPress()
        }}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <div className={styles.container}>
          <div className={styles.child}></div>
        </div>
      </div>
    );
  }
}

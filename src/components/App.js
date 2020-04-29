import React from "react";
import styles from "./app.module.scss";
import Header from "./header";
import Body from "./body";

export default function (props) {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
    </div>
  );
}

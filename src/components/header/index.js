import React from "react";
import styles from "./index.module.scss";
import { ReactComponent as NoteIcon } from "../../assets/img/signing.svg";

export default function (props) {
  return (
    <div className={styles.container}>
      <NoteIcon />
      <h1>My Note App</h1>
    </div>
  );
}

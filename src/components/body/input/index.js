import React, { Component } from "react";
import styles from "./index.module.scss";
import { ReactComponent as AddIcon } from "../../../assets/img/add.svg";
import { ReactComponent as SearchIcon } from "../../../assets/img/tools-and-utensils.svg";
export default class Input extends Component {
  render() {
    return (
      <div>
        <div className={styles.searchControl}>
          <div className={styles.icon}>
            
            <AddIcon onClick={() => {
              this.props.onPress()
            }}/>
          </div>
          <input
            type="text"
            value={this.props.search}
            onChange={(e) => { this.props.onChangeSearch(e.target.value)}}
            placeholder="Search content"
          />
          <div className={styles.icon2}>
            <SearchIcon />
          </div>
        </div>
      </div>
    );
  }
}

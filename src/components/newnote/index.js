import React, { Component } from "react";
import styles from "./index.module.scss";
import { ReactComponent as NoteICon } from "../../assets/img/noteIcon.svg";
import { ReactComponent as Save } from "../../assets/img/save.svg";
import { ReactComponent as Cancel } from "../../assets/img/exitIcon.svg";
export default class NewNote extends Component {
  state = {
    item: {
      title: {
        value: "",
        isTouched: false,
      },
      content: {
        value: "",
        isTouched: false,
      },
      tag: {
        value: "",
        isTouched: false,
      },
    },
  };
  hasError = (fieldName) => {
    if (
      this.state.item[fieldName].value.length === 0 &&
      this.state.item[fieldName].isTouched
    )
      return true;
    return false;
  };
  render() {
    return (
      <div
        // onClick={() => {
        //   this.props.onPress();
        // }}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <div
          className={styles.container}
          // onClick={(e) => {
          //   e.stopPropagation();
          // }}
        >
          <div className={styles.child}>
            <div className={styles.title}>
              <div className={styles.note}>
                <NoteICon />
                <label className={styles.name}>New Note</label>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("clicked");
                this.props.onPress();
                this.props.addNewNote({
                  title: this.state.item.title.value,
                  content: this.state.item.content.value,
                  tag: this.state.item.tag.value,
                });
              }}
            >
              <label>Title</label>
              <input
                required
                onClickCapture={() => {
                  this.setState({
                    item: {
                      ...this.state.item,
                      title: {
                        ...this.state.item.tag,
                        isTouched: true,
                      },
                    },
                  });
                }}
                className={this.hasError("title") ? styles.error : ""}
                type="text"
                value={this.state.item.title.value}
                onChange={(e) => {
                  this.setState({
                    item: {
                      ...this.state.item,
                      title: {
                        ...this.state.item.title,
                        value: e.target.value,
                        isTouched: true,
                      },
                    },
                  });
                }}
              />
              <label>Content</label>
              <textarea
                required
                onClickCapture={() => {
                  this.setState({
                    item: {
                      ...this.state.item,
                      content: {
                        ...this.state.item.tag,
                        isTouched: true,
                      },
                    },
                  });
                }}
                className={this.hasError("content") ? styles.error : ""}
                rows={3}
                type="text"
                value={this.state.item.content.value}
                onChange={(e) => {
                  this.setState({
                    item: {
                      ...this.state.item,
                      content: {
                        ...this.state.item.content,
                        value: e.target.value,
                        isTouched: true,
                      },
                    },
                  });
                }}
              />
              <label>Tags</label>
              <input
                onClickCapture={() => {
                  this.setState({
                    item: {
                      ...this.state.item,
                      tag: {
                        ...this.state.item.tag,

                        isTouched: true,
                      },
                    },
                  });
                }}
                className={this.hasError("tag") ? styles.error : ""}
                required
                type="text"
                value={this.state.item.tag.value}
                onChange={(e) => {
                  this.setState({
                    item: {
                      ...this.state.item,
                      tag: {
                        ...this.state.item.tag,
                        value: e.target.value,
                        isTouched: true,
                      },
                    },
                  });
                }}
              />

              <div className={styles.button}>
                <button type="submit">
                  <Save />
                  <span>Save</span>
                </button>
                <button
                  type="reset"
                  onClick={() => {
                    this.props.onPress();
                  }}
                >
                  <Cancel />
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

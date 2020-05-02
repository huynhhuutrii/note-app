import React from "react";
import styles from "./app.module.scss";
import Header from "./header";
import Body from "./body";
import NewNote from "./newnote";
import axios from "axios";

class Index extends React.Component {
  state = {
    notes: [],
    searchContent: "",
    temp: false,
  };
  async componentDidMount() {
    const url = "https://note-simple-app.herokuapp.com/note";
    // const request = await fetch(url, { method: "GET" });
    // if (request.ok) {
    //   //200
    //   let data = await request.json();
    //   this.setState({ notes: data });
    // } else {
    //   console.log(request.status);
    // }
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.setState({ notes: data }))
      .catch((err) => {
        console.log(err);
      });
  }
  onPress = () => {
    if (this.state.temp === false) {
      this.setState({ temp: true });
    } else this.setState({ temp: false });
  };
  onChangeSearchContent = (content) => {
    this.setState({ searchContent: content });
  };
  addNewNote = (note) => {
    this.setState({ notes: [...this.state.notes, note] });
    const url = "https://note-simple-app.herokuapp.com/note";
    axios
      .post(url, note)
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Body
          onPress={this.onPress}
          onChangeSearch={this.onChangeSearchContent}
          searchContent={this.state.searchContent}
          notes={this.state.notes.filter((el) => {
            return el.title.includes(this.state.searchContent);
          })}
        />
        {this.state.temp === false ? null : (
          <NewNote onPress={this.onPress} addNewNote={this.addNewNote} />
        )}
      </div>
    );
  }
}

export default Index;

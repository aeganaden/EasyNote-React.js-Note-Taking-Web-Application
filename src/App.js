import React, { Component } from "react";
import { Row, Col, Button, Affix, Input } from "antd";
import "./App.css";
import base from "./base";
import Post from "./components/Post";
import Content from "./components/Content";

class App extends Component {
  searchInput = React.createRef();
  state = {
    notes: {},
    selectedNote: {},
    noteID: "",
    tempNotes: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.userKey}/notes`, {
      context: this,
      state: "notes"
    });

    base.bindToState(`${params.userKey}/notes`, {
      context: this,
      state: "tempNotes"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  showContent = key => {
    const notes = { ...this.state.tempNotes };
    this.setState({ selectedNote: notes[key], noteID: key });
  };

  changeContent = (key, udpatedNote) => {
    const notes = { ...this.state.notes };
    notes[key] = udpatedNote;
    this.setState({ notes, selectedNote: udpatedNote });
  };

  deleteContent = key => {
    const notes = { ...this.state.notes };
    notes[key] = null;
    this.setState({ notes, selectedNote: {} });
  };

  dict = arr => Object.assign(...arr.map(([k, v]) => ({ [k]: v })));

  filterPosts = e => {
    const query = e.target.value;
    let tempNotes = Object.entries(this.state.notes).filter(
      note => note[1].title.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
    if (tempNotes.length > 0) {
      tempNotes = this.dict(tempNotes);
    }
    // console.log(tempNotes);
    this.setState({ tempNotes });
  };

  addNote = () => {
    const id = Date.now();
    const notes = { ...this.state.notes };
    const newNote = {
      title: "[Untitled]",
      created_at: Date(),
      updated_at: Date(),
      desc: "[Untitled]"
    };
    notes[id] = newNote;
    Object.keys(notes).sort((a, b) => {
      return b - a;
    });
    this.setState({ notes });
  };

  render() {
    const Search = Input.Search;
    return (
      <React.Fragment>
        <Row>
          <Col
            span={6}
            style={{
              height: "100vh",
              backgroundColor: "#e6f7ff",
              borderRight: "2px solid #e8e8e8",
              overflowY: "auto"
            }}
          >
            <Row>
              <Affix offsetTop={1}>
                {/*navigation*/}
                <Row
                  type="flex"
                  justify="space-around"
                  style={{
                    backgroundColor: "#e6f7ff",
                    padding: "2%"
                  }}
                >
                  <Col span={20}>
                    <Search
                      placeholder="Search a note"
                      ref="searchInput"
                      onChange={this.filterPosts}
                    />
                  </Col>
                  <Col span={2}>
                    <Button icon="plus" onClick={this.addNote} />
                  </Col>
                </Row>
              </Affix>
              <Row>
                {Object.keys(this.state.tempNotes).length !== 0
                  ? Object.keys(this.state.tempNotes).map(key => (
                      <Post
                        showContent={this.showContent}
                        key={key}
                        index={key}
                        note={this.state.tempNotes[key]}
                      />
                    ))
                  : null}
              </Row>
            </Row>
          </Col>
          <Col
            span={18}
            style={{ backgroundColor: "#f9f0ff", height: "100vh" }}
          >
            <Content
              noteID={this.state.noteID}
              deleteContent={this.deleteContent}
              changeContent={this.changeContent}
              selectedNote={this.state.selectedNote}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default App;

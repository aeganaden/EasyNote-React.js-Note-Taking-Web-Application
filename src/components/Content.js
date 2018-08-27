import React, { Component } from "react";
import { Row, Col, Input, Button, Modal } from "antd";
export class Content extends Component {
  onChangeHandler = event => {
    const updatedNote = {
      ...this.props.selectedNote,
      [event.target.name]: event.target.value,
      updated_at: new Date()
    };
    this.props.changeContent(this.props.noteID, updatedNote);
  };

  modalInfo = (selectedNote, dateOptions) => e => {
    const { title, desc, updated_at } = selectedNote;
    console.log(title);
    Modal.info({
      title: `${title}`,
      content: (
        <div>
          <hr />
          <p>
            <b>Last Update: </b>
            {new Date(updated_at).toLocaleString("en-us", dateOptions)}
          </p>
          <p>
            <b>Word Count: </b>
            {desc.match(/\S+/g).length}
          </p>
          <p>
            <b>Character Count: </b> {desc.length}
          </p>
        </div>
      ),
      onOk() {}
    });
  };

  render() {
    const { TextArea } = Input;
    const { title, desc, created_at } = this.props.selectedNote;
    const dateOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return (
      <div>
        {title != null && (
          <Row
            type="flex"
            align="middle"
            style={{
              padding: "1%",
              borderBottom: "2px solid #e8e8e8"
            }}
          >
            <Col span={6}>
              <Button
                shape="circle"
                style={{ margin: "0 2%" }}
                icon="info-circle-o"
                onClick={this.modalInfo(this.props.selectedNote, dateOptions)}
              />
              <Button
                shape="circle"
                style={{ margin: "0 2%" }}
                onClick={() => this.props.deleteContent(this.props.noteID)}
                icon="delete"
              />
            </Col>
            <Col span={18}>
              <Col span={12}>
                <Input
                  style={{
                    fontWeight: "600",
                    textAlign: "center",
                    backgroundColor: "transparent",
                    border: "none"
                  }}
                  name="title"
                  onChange={this.onChangeHandler}
                  value={title}
                />
              </Col>
              <Col span={12} style={{ textAlign: "right", fontWeight: "600" }}>
                {new Date(created_at).toLocaleString("en-us", dateOptions)}
              </Col>
            </Col>
          </Row>
        )}
        {title != null && (
          <Row style={{ height: "92vh" }}>
            <TextArea
              style={{
                backgroundColor: "transparent",
                border: "none",
                height: "100%",
                resize: "none",
                boxSizing: "border-box",
                textShadow: "none"
              }}
              name="desc"
              value={desc}
              onChange={this.onChangeHandler}
            />
          </Row>
        )}
      </div>
    );
  }
}

export default Content;

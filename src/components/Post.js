import React, { Component } from "react";
import { Row, Col } from "antd";
export class Post extends Component {
  showHandler = id => {
    this.props.showContent(id);
  };

  render() {
    const { title, desc } = this.props.note;
    return (
      <div
        style={{
          backgroundColor: "#fff1f0",
          padding: "2%",
          borderBottom: "2px solid #e8e8e8",
          margin: "2% 0",
          cursor: "pointer"
        }}
        onClick={this.showHandler.bind(this, this.props.index)}
      >
        <Row type="flex" align="middle">
          <Col span={16}>
            <h2
              style={{
                margin: "0",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }}
            >
              {title}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap"
              }}
            >
              <i>{desc}</i>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Post;

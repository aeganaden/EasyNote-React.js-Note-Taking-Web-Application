import React from "react";
import { Row, Col, Button } from "antd";
export default props => {
  return (
    <Row
      style={{ backgroundColor: "#efdbff", height: "100vh" }}
      type="flex"
      align="middle"
      justify="center"
    >
      <Col span={8}>
        <h1 style={{ fontSize: "10vw", textAlign: "center", margin: "0" }}>
          404
        </h1>
        <h1 style={{ textAlign: "center" }}>
          Uh, oh. I think you're lost.....
        </h1>
        <Button
          icon="left-square-o"
          type="primary"
          style={{ margin: "auto", display: "block" }}
          onClick={() => props.history.push(`/`)}
        >
          Take me home
        </Button>
      </Col>
    </Row>
  );
};

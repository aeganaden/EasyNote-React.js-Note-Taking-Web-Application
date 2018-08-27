import React, { Component } from "react";
import { Row, Col, Card, Button, Modal, Input } from "antd";

export class Login extends Component {
  notebokCodeInput = React.createRef();
  state = {
    visible: false
  };

  goToNotes = event => {
    var randomize = require("randomatic");
    event.preventDefault();
    this.props.history.push(`/notes/${randomize("A0", 10)}`);
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    const noteBookCode = this.refs.notebokCodeInput.input.value;
    this.props.history.push(`/store/${noteBookCode}`);
  };

  render() {
    return (
      <React.Fragment>
        <Row
          type="flex"
          align="middle"
          justify="center"
          style={{ height: "100vh", backgroundColor: "#ffe7ba" }}
        >
          <Col span={8}>
            <Card
              title="Welcome to EasyNote"
              bordered={false}
              style={{
                width: "100%",
                backgroundColor: "#95de64",
                borderRadius: "10px"
              }}
            >
              <Row type="flex" justify="space-between">
                <Col span={12}>
                  <form onSubmit={this.goToNotes}>
                    <Button style={{ color: "#9254de" }} htmlType="submit">
                      NEW NOTEBOOK
                    </Button>
                  </form>
                </Col>
                <Col span={12}>
                  <Button style={{ color: "#f5222d" }} onClick={this.showModal}>
                    GO TO MY NOTEBOOK
                  </Button>
                  <Modal
                    title="Enter Notebook Key"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    okText="Go"
                    maskStyle={{ backgroundColor: "#ff4d4f" }}
                    onCancel={e =>
                      this.setState({
                        visible: false
                      })
                    }
                  >
                    <Input ref="notebokCodeInput" placeholder="Notebook Key" />
                  </Modal>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Login;

import { getAllStudents } from "./client";
import React, { Component } from "react";
import { Table, Avatar } from "antd";
import Container from "./Container";

class App extends Component {
  state = { student: [] };

  componentDidMount() {
    this.fetchStudents();
  }
  fetchStudents = () => {
    getAllStudents().then((res) =>
      res.json().then((student) => {
        this.setState({ student });
      })
    );
  };
  render() {
    const { student } = this.state;
    if (student && student.length) {
      const column = [
        {
          title: "",
          key: "avatar",
          dataIndex: "name",
          render: (text, student) => (
            <Avatar size={"large"}>
              <Avatar
                style={
                  ({ size: "large" },
                  { backgroundColor: "#fde3cf" },
                  { color: "black" })
                }
              >
                {student.firstname.charAt(0).toUpperCase()}
                {student.familyname.charAt(0).toUpperCase()}
              </Avatar>
            </Avatar>
          ),
        },
        {
          title: "StudentId",
          dataIndex: "studentId",
          key: "studentId",
        },

        {
          title: "First name",
          dataIndex: "firstname",
          key: "firstname",
        },

        {
          title: "Last name",
          dataIndex: "familyname",
          key: "familyname",
        },

        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
      ];

      return (
        <Container>
          <Table
            dataSource={student}
            columns={column}
            rowKey={"studentId"}
          ></Table>
        </Container>
      );
    }

    return <h1>No student found</h1>;
  }
}
export default App;

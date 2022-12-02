import React from "react";
class MyComponent extends React.Component {
  state = {
    age: 18,
    name: "Minh",
    hometown: "Thanh Hóa",
  };
  render() {
    return (
      <div>
        Tên tôi là {this.state.name}, quê ở {this.state.hometown}
      </div>
    );
  }
}
export default MyComponent;

import React from "react";
// export class ClassMyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0 };
//     }
  
//     incrementCount = () => {
//       this.setState({ count: this.state.count + 1 });
//     }
  
//     render() {
//       return (
//         <div>
//           <p>{this.state.count}</p>
//           <button onClick={this.incrementCount}>Increment</button>
//         </div>
//       );
//     }
//   }

  export class ClassMyComponent extends React.Component {
    componentDidMount() {
        console.log("component mounted")
      // Perform setup or data fetching here
    }
  
    componentWillUnmount() {
        console.log("unmounted")
      // Clean up (e.g., remove event listeners or cancel subscriptions)
    }
  
    render() {
        return <div>
            hello form class components.
        </div>
      // Render UI
    }
  }
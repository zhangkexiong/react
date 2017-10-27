import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class HelloTest extends React.Component{
  render(){
       return test();
     }
}
function test(){
  return (ReactDOM.render(<h1>hello java</h1>,document.getElementById('hello')));
}
export default HelloTest;

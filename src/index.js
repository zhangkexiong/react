import React from 'react';
import ReactDOM from 'react-dom';
import HelloTest from './hello.js'
import './index.css';


//ES6的class来定义一个组件
// class Hello extends React.Component{
//   render(){
//     return <h1>hello {getGreeting(user1)}{tick()}</h1>;
//   }
//    formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }
//     user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
//   };
//
//    element = (
//     <h1>
//       Hello, {formatName(user)}!
//     </h1>
//   );
//   user1 =null;
//   getGreeting(user){
//     if (user) {
//       return <h1>{formatName(user)}</h1>
//     }
//     return <h1>没有用户</h1>
//   };
//
//   element2 = (
//     <h1>
//       Hello, {getGreeting(user1)}!
//     </h1>
//   );
//   element3 = <div tabIndex="0" id="mydiv"></div>;
// }
//
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };
//
// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );
//
// const user1 =null;
//
// function getGreeting(user){
//   if (user) {
//     return <h1>{formatName(user)}</h1>
//   }
//   return <h1>没有用户</h1>
// };
//
// const element2 = (
//   <h1>
//     Hello, {getGreeting(user1)}!
//   </h1>
// );
//
// const element3 = <div tabIndex="0" id="mydiv"></div>;
//
// const element4= (
//   <h1 className="greeting">
//     Hello,React!!!
//   </h1>
// );
//
// const element5 = React.createElement(
//   'h1',
//   {className:'greeting'},
//   'hello world'
// );
//
// // 注意: 这是简化的结构
// const element6 = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world'
//   }
// };
// //函数式组件
// function tick(){
//   const elementt8=(
//     <div id="testDiv">
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>);
//     ReactDOM.render(
//     elementt8,
//     document.getElementById('root')
//   );
// }
//
//
// //表示js的入口
// // ReactDOM.render(<Hello />,document.getElementById('hello'));
// // ReactDOM.render(element3,document.getElementById('hello'));
// // ReactDOM.render(<h1>hehe</h1>,document.getElementById('mydiv'))
// // ReactDOM.render(<Hello />,document.getElementById('hello'));
// //表示每隔1s就能够回调tick方法
// //setInterval(tick, 1000);
//
// class Welcome extends React.Component{
//   render(){
//     return <div name="zhangsan">Hello {App()}</div>;
//   }
//   props = {
//     name:"zhangsan"
//   }
// }
//
// function App(){
//   return <div>
//   <Welcome name="zhangsan"/>
//   <World name="lisi"/>
//   </div>;
// }
//
// function World(){
//   return <div>{this.name}</div>
// }
//
//
//
// // ReactDOM.render(element,document.getElementById('hello'))
// // ReactDOM.render(element3,document.getElementById('hello'))
// // ReactDOM.render(<Hello />,document.getElementById('hello'))
// //表示自己定义的组件
// const ele10=<div>{App()}</div>
ReactDOM.render(<HelloTest />,document.getElementById('root'))

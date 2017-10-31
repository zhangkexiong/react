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
class Welcome extends React.Component{
  render(){
    return <div>{this.props.name}</div>;
  }
}

const ele1=<Welcome name="zhangsan"/>

//组件必须返回一个单独的根元素。这就是为什么我们添加一个 <div> 来包含所有 <Welcome /> 元素的原因。
function Aa(){
  return <div>
  <Welcome name="lisi"/>
  <Welcome name="wangwu"/>
  </div>;
}
//将时间
function formatDate(data){
  return data.toLocaleTimeString();
}

function Comment(props){
  return (<div className="Comment">
          <div className="UserInfo">
          <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
          <div className="UserInfo-name">
           {props.author.name}
          </div>
          </div>
          <div className="Comment-text">
          {props.text}
          </div>
          <div className="Comment-data">
          {formatDate(props.data)}
          </div>
    </div>);
}
const ele2 = {
  data:new Date(),
  text:"it is my first project",
  author:{
    name:"hello hello",
    avatarUrl:"http://placekitten.com/g/64/64"
  }
};

/**
 * React的生命周期
 */
class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        date: new Date(),
        name: "lisi"
    };
  }
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.name}{this.state.date.toLocaleDateString()}.</h2>
      </div>
    );
  }
//=>  data是传入的数据表示的是匿名函数(data)=>{} 并且此函数是生命周期函数,表示在组件挂载之前调用,如果在此函数中调用setState本次的render函数可以看到更新后的state
  componentWillMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  //生命周期方法,表示在组件挂载之后调用
  componentDidMount(){}

  tick() {
  this.setState({
    name:"zhangsan",
    date: new Date()
  });
  }
  //生命周期方法 props是父组件传递给子组件的。父组件发生render的时候子组件就会调用componentWillReceiveProps（不管props有没有更新，也不管父子组件之间有没有数据交换）。
  //componentWillReceiveProps(nextProps);

}
//
// function App(){
//   return <div>
//   <Welcome name="zhangsan"/>
//   <Welcome name="lisi"/>
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
/**
 * React中处理事件
 * 当使用一个 ES6 类 定义一个组件时，
 * 通常的一个事件处理程序是类上的一个方法。
 * 例如,Toggle 组件渲染一个按钮，让用户在 “ON” 和 "OFF" 状态之间切换：
 */
class Toggle extends React.Component {
    /**
     * 构造方法来初始化参数
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        //表示将函数绑定到该对象上去
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * 表示点击以后isToggleOn变成false:off
     */
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    /**
     * 主函数的入口
     * 当为true的时候为ON,当为OFF的时候为false
     * @returns {XML}
     */
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

/**
 * 实现登录与退出操作
 */
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn : false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

/**
 * 列表和键
 */
const numbers = [1,2,3,4,5];

const doubled = numbers.map((t)=> t*2);

console.log(doubled);

const listItems = numbers.map(number=> <li>{number}</li>);

//通常情况下，我们会在一个组件中渲染列表

function NumberList(props) {
    const numberss = props.num;
    const listItemss = numberss.map(number=> <li>{number}</li>);
    return (<ul>{listItemss}</ul>);
}

//键

const keyItems = numbers.map(t=><li id={t.toString()}>{t}</li>);

const todo = [{'id':1,'name':'zhangsan'},{'id':2,'name':'lisi'}];

const todoItems = todo.map(aa=><li id={aa.id}>{aa.name}</li>);

//通常情况下我们使用组件来渲染键值

function KeyList(props) {
    const keys = props.itemKeys;
    const keysItem = keys.map(t=><li id={t.id}>{t.name}</li>)
    return <ul>{keysItem}</ul>;
}

const kk = [{'id':1,'name':'张三'},{'id':2,'name':'李四'}];

/**
 * 表单的使用(可以将表单写为受控组件)
 * 如果我们想使上一个例子在提交时记录名称
 */

class NameForm extends React.Component{
    constructor(props){
        super(props);
        //表示该组件绑定两个事件
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //把值放到state域中
        this.state = {value : ''}
    }

    handleChange(event){
        this.setState({value:event.target.value.toUpperCase()})
    }

    handleSubmit(event){
        alert('A name was submitted:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

/**
 * 处理选择框
 */
class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(event){
        alert('you choose is' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (<form onSubmit={this.handleSubmit}>
                <label>Pick your favorite then choose
            <select name={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
                </label>
            <input type="submit" value="Submit"/>
        </form>);
    }
}

/**
 * 处理多个数据元素,初始化状态是checkbox为选择状态,文本框的默认值为2
 */
class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing:true,
            numberOfGuest:2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render(){
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

/**
 * 状态的改变(测试温度的变化给文本框带来的影响)
 */
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperture:''
        };
    }
    handleChange(e){
        this.setState({
            temperture:e.target.value
        });
    }
    render(){
        const temperature = this.state.temperture;
        return (<fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input value={temperature} onChange={this.handleChange}/>
            <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
        </fieldset>);
    }
}
function BoilingVerdict(props) {
    if (props.celsius >= 100){
        return <p>The water is boil</p>
    }
    return <p>The water is not boil</p>
}

/**
 * React编程思想
 * 产品的类目行
 */
class ProductCategoryRow extends React.Component {
    render() {
        return <tr><th colSpan="2">{this.props.category}</th></tr>;
    }
}

/**
 * 产品
 */
class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

/**
 * 产品表
 */
class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

/**
 * 搜索框
 */
class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

/**
 * React的编程思想(静态的页面)
 */

class FilterableProductTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}

/**
 * 相当于数据源
 * @type {[null,null,null,null,null,null]}
 */
var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


ReactDOM.render(<Comment data={ele2.data} text={ele2.text} author={ele2.author} />,document.getElementById('root'));
ReactDOM.render(<Clock />,document.getElementById('root'));
ReactDOM.render(<NumberList num={numbers}/>,document.getElementById('root'));
ReactDOM.render(<ul>{todoItems}</ul>,document.getElementById('root'));
ReactDOM.render(<KeyList itemKeys={kk}/>,document.getElementById('root'));
ReactDOM.render(<FlavorForm/>,document.getElementById('root'));
ReactDOM.render(<Reservation/>,document.getElementById('root'));
ReactDOM.render(<Calculator/>,document.getElementById('root'));
ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
);







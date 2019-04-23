class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    //obj literal
    this.state = {
      done: false
    };
  }
  // when list is clicked, it will toggle the done
  // boolean, render will run
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  // makes the style on the state and update based on the teractions
  render() {
    var style = {
      fontWeight: this.state.done ? "bold" : "normal"
    };
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>
        {this.props.list}
      </li>
    );
  }
}

var GroceryList = props => (
  <ul>
    {props.lists.map(list => (
      <GroceryListItem list={list} />
    ))}
  </ul>
);

// this line of code is a must since it needs this code to render
//("app") is the
ReactDOM.render(
  <GroceryList lists={["Apples", "Oranges"]} />,
  document.getElementById("app")
);

// state
// data display when the componet is rending
// render ()
// describing what the UI look likes
// react is the view library

// var groceryList =['Apple', 'Oranges'];

// class GroceryListItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { // data will live on the state obj of the toDdoListItem
//             //
//             done: false
//         };
//     }
//     onListItemClick() {
//         this.setState({
//             done: !this.state.done
//         });
//     }
//     render() {
//         var style = {
//             textDecoration: this.state.done ? 'line-through' : none
//         };
//         return (
//             <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.food}</li>
//         );
//     }
// }
// var GroceryList = (props) => (
//     <ul>
//         {props.items.map(item =>
//             <GroceryListItem food={item}/>
//             )}
//     </ul>
// );

// ReactDOM.render(<GroceryList items={groceryList}/>,document.getElementById("app"))

// // var GroceryList = (props) => {
// //     var onListItemClick = (event) => {
// //         console.log('i got clicked');
// //     };
// //     return (
// //         <ul>
// //             <li onClick={onListItemClick}>{props.items[0]}</li>
// //             <li onClick={onListItemClick}>{props.items[1]}</li>
// //         </ul>
// //     )
// // }

// // var App = () => (
// //     <div>
// //         <h2>Grocery List</h2>
// //         <GroceryList items={['Apple', 'Oranges']}/>
// //     </div>
// // );
// // ReactDOM.render(<App />, document.getElementById("app"));

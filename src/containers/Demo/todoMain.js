import  React,{Component} from "react";
import TodoItem from "./todoItem.js"

export default class TodoMain extends Component{
	constructor(){
		super();
	    //todoDone:"todo";
	    this.state = {
	    	 todoDone:"todo"
	    // 	todos: props.todos
	     }
	}

//   componentWillReceiveProps(nextProps){
//   	debugger
// 	this.setState({
// 		todos:nextProps.todos
// 	});
// }
//未完成
 //  clearDones(){
 //  	debugger
 //  	this.setState({
	// 	todoDone: "!todo.isDone"
	// });
    // let todos = this.props.todos.filter(todo => !todo.isDone);
    // this.setState({
    
    //   todos: todos
      //isAllChecked: false
    //});
    // this.db.set('todos', todos);
  
  //已完成
 //  haveDones(){
 //  	this.setState({
	// 	todoDone: "todo.isDone"
	// });
  	//todoDone: "todo.isDone"
	// let todos = this.props.todos.filter(todo => todo.isDone);
	//  this.setState({
 //      todos: todos
      
      //isAllChecked: false
  
    //});
	// }
	//所有
	 // toggleAll(){
	 // 	this.setState({
		// 	todoDone: "todo"
		// });
	 	// let todos = this.props.todos.filter(todo =>todo);
	 	// this.setState({
	 	// 	todos:todos

	 	// });

	//  }
	// all(bbb){
	// 	debugger
	// 	let item=this.props.todos.map((todo, index) => {
	// 		return(
	// 			<TodoItem key={index} index={index} {...todo} {...this.props}/>
	// 			);
	// 	});
	// 	this.setState({
	// 		todossss:item
	// 	})
	// }
	render(){
		//let bbb = this;
			//let ddd=[this.state.todoDone];
			//console.log(this.state);
		return(
			<ul className="todo-list">
			   
				{this.props.todos.map((todo, index) => {
					//if(eval("("+ddd+")")){
						//if(eval("ddd")){
							//return (
							//<TodoItem  />
						//    );
						// }
					 return <TodoItem key={index} index={index} {...todo} {...this. props}/>
				 })}
			</ul>





		);
	}
} 
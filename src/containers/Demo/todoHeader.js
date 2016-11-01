   
import React,{Component} from "react";

export default class TodoHeader extends Component{
	handlerKeyUp(event){
		if(event.keyCode === 13){
			let value = event.target.value;
			if(!value) return false;
			let newTodoItem = {
				text: value,
				isDone:false

			};
			event.target.value = "";
			this.props.addTodo(newTodoItem);
		}
	}
	render(){
		return(
			<div className="panel-header">
				<input className="header" onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="What is your task?"/>
			</div>
			)
	}
}

import React,{Component} from "react";

export default class TodoItem extends Component{
	//ES6构造函数
	constructor(props){
		super(props);
		this.state={value:this.props.text};
	}
	
	onChange(e){
		var value=e.target.value;
		this.setState({value:value});
	}
	//input编辑框 enter事件
	onKeyDown(e){
		//如果是回车
		if(e.keyCode===13){
			//editodo接受两个参数：当前编辑的item的index，和编辑后的内容			
			this.props.editTodo(this.props.index,this.state.value);
			this.handlerBlur();
		}
	}
	handlerChange(){
		let isDone = !this.props.isDone;
		this.props.changeOneTodo(this.props.index, isDone);
	}
	handlerMouseOver(){
		this.refs.deleteBtn.style.display = "inline";
	}
	handlerMouseOut(){
		this.refs.deleteBtn.style.display = "none";
	}
	handlerDelete(){

		this.props.deleteTodo(this.props.index);
	}
	//input框失去焦点的时候，input隐藏，span显示
	handlerBlur(){
		this.refs.editBtn.style.display="none";
		this.refs.editSpan.style.display="inline-block";
		
		this.props.editTodo(this.props.index,this.state.value);
	}
	//双击span标签，input显示，span隐藏
	handlerEdit(){
		this.refs.editBtn.style.display="inline-block";
		this.refs.editSpan.style.display="none";
		this.refs.editBtn.focus();
		this.props.editTodo(this.props.index,this.state.value);
		this.refs.editBtn.value = this.props.text;
	}

	render(){
		let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
		return (
			<li
				onMouseOver={this.handlerMouseOver.bind(this)}
				onMouseOut={this.handlerMouseOut.bind(this)} >
				<input className="toggle" type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
				<span style={doneStyle} className="exo" onDoubleClick={this.handlerEdit.bind(this)} ref="editSpan">{this.props.text}</span>

				<input style={doneStyle} style={{'display':'none'}} onBlur={this.handlerBlur.bind(this)} onChange={(e)=>this.onChange(e)} focus={this.handlerEdit.bind(this)} onKeyDown={(e)=>this.onKeyDown(e)} ref="editBtn" className="write" value ={this.state.value}/>
				<button style={{'display':'none'}} ref="deleteBtn" onClick={this.handlerDelete.bind(this)} className="fx">X</button>

			</li>
			)
	}

}
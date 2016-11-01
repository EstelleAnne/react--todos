import  React,{Component} from "react";

export default class TodoFooter extends Component{
	handlerAllState(event){
		this.props.changeAllTodos(event.target.checked, true);
	}
	showActive(){
		this.props.filter(false);
	}
	showAll(){
		this.props.filter();
	}
	showFinished(){
		this.props.filter(true)
	}
	handlerClick(){
		this.props.clearDone();
	}
// 	handlerHaveClick(){
// 	this.props.haveDone();
// }
	render(){
		//{this.props.todoDoneCount}
		return(
			<div className="clearfix todo-footer">
				<input  checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)} type="checkbox" className="fl"/>
                <span className="fl">{this.props.todoDoneCount}已完成 / {this.props.todoCount}总数</span>
                <span className="btnbox">
		            <button className="b1" onClick={this.showAll.bind(this)}>所有</button>
	                <button className="b2" onClick={this.showActive.bind(this)}>未完成</button>
	                <button className="b3" onClick={this.showFinished.bind(this)}>已完成</button>
                </span>
				<button onClick={this.handlerClick.bind(this)} className="fr">清除已完成</button>
			</div>
		)

	}
}
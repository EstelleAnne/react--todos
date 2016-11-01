import React,{Component} from "react";
import LocalDB from "localDB";
import "./app";

import TodoHeader from "./todoHeader";
import TodoMain from "./todoMain";
import TodoFooter from "./todoFooter";

class App extends Component {
  constructor(){
    super();
    this.db = new LocalDB('react-Todos');
    this.state = {
      todos: this.db.get("todos") || [],
      isAllChecked: false,
      filter: null
    };
   
  }
  //判断是否所有任务的状态都完成，同步底部的全选框
  // allChecked(){
  //   let isAllChecked = false;//默认全选为false
  //   if(this.state.todos.every((todo)=> todo.isDone)){
  //     isAllChecked = true;
  //   }//如果todos中所有todo的状态都是isDone，则全选为true
  //   this.setState({todos: this.state.todos, isAllChecked});
  // }
  //添加todo
  addTodo(todoItem){
    let aa = [...this.state.todos];
    aa.push(todoItem);
    this.setState({todos:aa});
    //this.allChecked();
    this.db.set('todos',this.state.todos);
  }
  //选中单个已完成，main里的选框调用
  changeOneTodo(index, isDone){
  	let todos = this.state.todos;
  	this.setState({
  		todos:[
			...todos.slice(0, index),
			Object.assign({},todos[index],{
				isDone:isDone
			}),
			...todos.slice(index+1)
			]
  	})
    // this.state.todos[index].isDone = isDone;
    // this.allChecked();
	this.db.set('todos', this.state.todos);

  }
  //footer里的全选框调用
  changeAllTodos(isDone,isChangeAll){
    let todos = [...this.state.todos];
      this.setState({
        todos:todos.map((todo) => {
          //todo.isDone = isDone;
          return Object.assign({}, todo, {
            isDone
          })
        })
        //isAllChecked:isDone
        })
         this.db.set('todos', this.state.todos);
   }
   //清除已完成
  clearDone(isDone){
	//this.refs.todoidone.clearDone();

    //let todos = [...this.state.todos.filter(todo => !todo.isDone)];
    let todos = [...this.state.todos];
    this.setState({
    
      todos:todos.filter(todo => !todo.isDone),
      //isAllChecked: false
    });
    this.db.set('todos', todos);
  }

 //  clearDones(){
	// this.refs.todoidone.clearDones();
    // let todos = this.state.todos.filter(todo => !todo.isDone);
    // this.setState({
    
    //   todos: todos,
    //   isAllChecked: false
    // });
    // this.db.set('todos', todos);
  //}
    // haveDones(){
  		// this.refs.todoidone.haveDones();
	// let todos = this.state.todos.filter(todo => todo.isDone);
	//  this.setState({
 //      todos: todos,
      
 //      isAllChecked: false
  
 //    });
 //    this.db.set('todos', todos);
// }
   // haveDone(){
  	  //this.refs.todoidone.haveDones();
	  //let todos = this.state.todos.filter(todo => todo.isDone);
	  //this.setState({
      //todos: todos,
      
   //      isAllChecked: false
  
 //    });
 //    this.db.set('todos', todos);
//}
//  s
// toggleAll(){
// 	this.refs.todoidone.toggleAll();
// }
setFilter(isDone){

  console.log("setfitlers")
  this.setState({
    filter: isDone
  })
}
//筛选footer里的所有，未完成和已完成
filterTodos(){
  var isDone = this.state.filter;
  if(typeof(isDone) !== 'boolean') return this.state.todos;
  return this.state.todos.filter(todo => {
    return !!todo.isDone === isDone;
  });
}
// setFilter(isDone){
//   this.setState({
//     filter: isDone
//   })
// }
//getTodosByfilter(){
    //console.log(this.filter);

   // return this.filter(this.state.filter);
  //}

  deleteTodo(index){
  
    // let todos = this.state.todos;
    // this.setState({
    //   todos: [
    //     ...todos.slice(0, index),
    //     ...todos.slice(index+1)

    //   ]
    // });


    // let{todos, filter} = this.state;
    // let findIndex = -1;
    // if(typeof(filter) !== 'boolean'){
    //   findIndex = index; 
    // }else{
    //   for(var i=0; true; i++){
    //     let todo = todos[i];
    //     if(todo.isDone===filter){
    //       findIndex++;
    //       if(findIndex===index){
    //         findIndex = i;
    //         break;
    //       }
    //     }
    //   }
     
    // }

   
   let {todos, filter} = this.state,
        findIndex = index,
        bb=-1;
    if(typeof(filter) == 'boolean'){
      findIndex=todos.findIndex((ele)=>{
        ele.isDone == filter && bb++;
        return bb == index;
      });
    }


    this.setState({
      todos: [
        ...todos.slice(0, findIndex),
        ...todos.slice(findIndex+1)

      ]
    });
    //debugger;
  	// let bb = [...this.state.todos];
  	// bb.splice(index, 1);
   //  this.setState({todos:bb});
    this.db.set('todos', this.state.todos);
    //this.setState({});
    // if(this.refs.todoidone.clearDones()){
    // 	todo = !todo.isDone
    // };
    // if(this.refs.todoidone.haveDones()){
    // 	todo = todo.isDone
    // };
    // if(this.refs.todoidone.toggleAll( )){
    // 	todo =   
    // };
  }
  //在todoitem中，input的enter事件中调用该方法
  // getTodosByfilter(){
  //   return this.filter(this.state.filter)
  // }
  editTodo(index,value){
    var newtodos=[...this.state.todos];
    newtodos[index].text=value;
    this.setState({todos: newtodos});
    this.db.set('todos', newtodos);
  }

  render(){
    var props = {
      todoCount: this.state.todos.length ||  0,
      todoDoneCount: (this.state.todos && [...this.state.todos].filter((todo)=>todo.isDone)).length || 0
    };
    return(
      <div className="panel">
        <TodoHeader addTodo={this.addTodo.bind(this)}/>
        <TodoMain  className="main"  deleteTodo={this.deleteTodo.bind(this)} editTodo={this.editTodo.bind(this)} todos={this.filterTodos()} changeOneTodo={this.changeOneTodo.bind(this)}/>
        <TodoFooter className="footer"  filter={this.setFilter.bind(this)} {...props}  clearDone={this.clearDone.bind(this)} changeAllTodos={this.changeAllTodos.bind(this)}/>
      </div>

    )

  }
}




//
export default App
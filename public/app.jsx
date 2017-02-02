var TodoForm = React.createClass({
handleList:function(e){
    e.preventDefault();
    var value = this.refs.name.value;
    this.props.passValue(value);
    this.refs.name.value = "";
},
    render:function(){
        return(
            <form onSubmit = {this.handleList}>
            <input type="text" ref = "name"/>
            <button>+</button>
            </form>
        )
    }
});

var TodoList = React.createClass({
    handleRemove:function(){
        this.props.onRemove(this.props.index);
    },

    render:function(){
        return (
            <li>{this.props.children} <button onClick = {this.handleRemove}>delete</button> </li> 
        )
    }
});


var TodoApp = React.createClass({
    getInitialState:function(){
        return {

            notes:[

            ],
        }
    },
    addList:function(val){
    var arr = this.state.notes;
    arr.push(val);
    this.setState({
        notes:arr,
    })
    },
     remove:function(i){
     var arr = this.state.notes;
     arr.splice(i,1);
     this.setState({
         notes:arr,
     })
    },
    eachNote:function(note,i){
        return  <TodoList key = {i} index = {i} onRemove = {this.remove}>{note}</TodoList>
    },
    render:function(){
        return (
            <div>
             <TodoForm passValue = {this.addList}/>
             <ul>
             {this.state.notes.map(this.eachNote)}
             </ul>
            </div>
        )
    }
});
ReactDOM.render(<TodoApp/>,document.getElementById("app"));
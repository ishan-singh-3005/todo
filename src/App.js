import React from 'react';
import ListItems from './ListItems';
import './App.css';
import TodoBanner from './TodoBanner';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      doneItems:[],
      currentItem:{
        text:'',
        key:'',
        priority:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now(),
        priority: ""
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
      const newItems= [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
      this.setState({
        items:filteredItems
      })
  }

  setUpdate(text, key){
    const items = this.state.items;
    items.map(item => {
      if(item.key === key){
        item.text=text;
      }
      this.setState({
        items: items
      })
    })
  }

  clearAll(){
    this.setState({
      items:[]
    })
  }

  render(){
    return (
      <div className= "App">
        <TodoBanner items={this.state.items}/>
        <header>
          <form id= "to-do-form" onSubmit={this.addItem}>
            <input type= "text" placeholder="Add todo"
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
            <button type= "submit">Add</button>
          </form>
          <div>
            <button className="btn-danger"
            onClick={this.clearAll}
            >Clear All</button>
          </div>          
        </header>
        <ListItems items={this.state.items}
        done={this.state.items.done}
        deleteItem={this.deleteItem}
        setUpdate= {this.setUpdate}
        priority={this.state.currentItem.priority}/>
      </div>
      );
  }  
}

export default App;

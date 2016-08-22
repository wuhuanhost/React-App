import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../actions/actions';
// import ToDoList from "./toDoList";

import { Button,Input } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var str = "React-App";
        console.log("被渲染${str}");
        return (
            <div>

                <hr/>
                <Input placeholder="基本使用" type='text'  ref="input"/>
                <Button color="success" onClick={(e) => this.handleClick(e) }>add</Button>
                <hr/>

                <div>
                    {
                        this.props.items.map(function(item) {
                            return <div className="item" key={item.ids}>{item.name}</div>
                        })
                    }
                </div>
            </div>
        );
    }


    handleClick(e) {
        const node = ReactDOM.findDOMNode(this.refs.input);
        console.log(node)
        const text = node.value.trim();
        if (!text) return;
        let id = Math.random();
        this.props.addItem(id, text);
        node.value = "";
    }
}


function mapStateToProps(state) {
    console.log(state.items)
    return {
        items: state.items
    }
}


// function buildActionDispatcher(dispatch) {
//     return {
//         action: bindActionCreators(action, dispatch)
//     }
// }

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps, action)(App);




import React, { Component } from 'react';
import * as action from '../actions/actions';
import { connect } from 'react-redux';

class ToDoList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.items.map(function(item) {
                        return <div className="item" key={item.ids}>{item.name}</div>
                    })
                }
            </div>
        )
    }
    

} 

function mapStateToProps(state) {
    return {
        items: state.items
    }
}



//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps, action)(ToDoList);


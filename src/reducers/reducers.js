import { fromJS  } from 'immutable';
//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
export default function dataFun(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            let newState =Object.assign({}, state);
            let item = { ids: action.id, "name": action.text };
            newState.items.push(item);
            return fromJS(newState).toJS();
        default:
            return { items: [{ ids: "1", name: 'foo' }, { ids: "ids", name: 'bar' }] };
    }
}


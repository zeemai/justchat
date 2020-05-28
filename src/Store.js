import React from 'react';

export const CTX = React.createContext();

const initState = {
    topic1: [
        {from: 'John', msg: 'Testing 1'},
        {from: 'John2', msg: 'Testing 2'}
    ],
    topic2: [
        {from: 'Doe', msg: 'Testing 1'},
        {from: 'Doe2', msg: 'Testing 2'}
    ]
}

function reducer(state, action){

    const {from, msg, topic} = action.payload
    switch(action.type){
        case 'RECEIVED_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {
                        from,
                        msg
                    }
                ]
            }
        default:
            return state
    }
}

export default function Store(props){

    const reducerHook = React.useReducer(reducer, initState)

    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}
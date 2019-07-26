import React, {Component} from "react";
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "dropdown":
            return {...state, dropdown: action.payLoad};
        case 'navigation':
            return {...state, navigation: action.payLoad};
        default:
            return state;
    }
};

export class ScteProvider extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action))
        },
        dropdown: false,
        navigation: "",
    };

    render() {
        let {state, props: {children}} = this;
        return (
            <Context.Provider value={ state }>{children}</Context.Provider>
        )
    }
}

export const ScteConsumer = Context.Consumer;
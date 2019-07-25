import { IClickerState, IState } from "../reducers";
import React from 'react';
import { updateClicks } from "../actions/clicker.actions";
import { connect } from "react-redux";

export interface IClickerProps {
    // Data from state store
    clicker: IClickerState,
    // Action creators from the dispatcher
    updateClicks: (amount: number) => void;
}

class ClickerComponent extends React.Component<IClickerProps, {}> {

    render() {
        return (
            <div>
                <h2>Clicks: {this.props.clicker.clicks}</h2>
                <button onClick={() => this.props.updateClicks(1)}>+1</button>
            </div>
        )
    }
}

// This function will convert state-store values to
// component properties
const mapStateToProps = (state: IState) => {
    return {
        clicker: state.clicker
    }
}

// This object definition will be used to map action creators to
// properties
const mapDispatchToProps = {
    updateClicks: updateClicks
}


export default connect(mapStateToProps, mapDispatchToProps)(ClickerComponent);

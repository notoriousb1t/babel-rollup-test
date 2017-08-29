import * as React from 'react';

export class SelectInput extends React.Component {
    constructor(props) {
        super(props);
  
        const { options, label } = this.props;
  
        this.state = {
            options,
            label
        };
    }
  
    updateValue = event => this.props.onChange(event);
    
    render() {
        return <input onChange={this.updateValue} />
    }
}
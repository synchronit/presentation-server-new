import React from 'react'

class DeleteFormComponent extends React.Component {


    render() {
        var badge = ''
        if(this.props.amount > 0 && this.props.massFormsSelection) {
            badge = <span className="amount">{this.props.amount}</span>
        }

        return (
            <button
                type="button"
                className={"mass-form-delete" + (this.props.massFormsSelection ? " selected" : "")}
                onClick={this.props.selectForms}>
                <span className="icon-delete"></span>
                {badge}
            </button>
        );
    }
}

export default DeleteFormComponent

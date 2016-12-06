import React from 'react'

class CreateNewFormComponent extends React.Component {
    render() {
        return (
            <div className="create-new-form">
                <span className="text">CREATE NEW FORM!</span>
                <span className="icon-arrow"></span>
                <a id="add-form" href="" title=""><span className="icon-plus"></span></a>
            </div>
        );
    }
}

export default CreateNewFormComponent
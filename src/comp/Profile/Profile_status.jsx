import React from 'react';

class Profile_status extends  React.Component {


    state = {
        editMode: false,
        status: this.props.status

    }

    componentDidUpdate(prevProps, PrevState) {

        if (prevProps.status != this.props.status)
            this.setState({status: this.props.status});
    }

    activEditMode = () => {
        this.setState({editMode: true});

    }
    deactivEditMode=()=>{
        this.setState({editMode: false});

        this.props.UpdateStatusThunk(this.state.status)
    }
    onStatusChenge = (e) => {
        //this.state.status=e.currentTarget.value;
        this.setState({status: e.currentTarget.value});
    }

    render() {

        return <div>

            {!this.state.editMode && <div>
                <span onDoubleClick={this.activEditMode}>-{this.props.status || "нет статуса"}-</span>

            </div>}
            {this.state.editMode && <div>
                <input onChange={this.onStatusChenge} autoFocus={true} onBlur={this.deactivEditMode}
                       value={this.state.status}/>
            </div>}
        </div>
    }
}

export default Profile_status;
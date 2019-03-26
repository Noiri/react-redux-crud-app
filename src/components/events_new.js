import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {postEvent} from '../actions';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';

export class EventsNew extends Component {
    renderField(){
            //const { input, label, type, meta: { touched, error} } = field;
            return (<div></div>)
        }

    render(){
        return (
            <form>
                <div><Field label="Title" name="title" type="text"  component={this.renderField} /></div>
                <div><Field label="Body" name="body" type="text"  component={this.renderField} /></div>
                <div>
                <input type="submit" value="Submit" disabled={false} />
                    <Link to="/" >Cancel</Link> 
                </div>
            </form>
        );
    }
}

//const mapDispatchToProps = ({postEvent});

const validate = values => {
    const errors = {};
    return errors;
}


export default connect()(
    reduxForm({ form: 'eventNewForm' })(EventsNew)
);


//export default connect(null, null)(EventsNew);

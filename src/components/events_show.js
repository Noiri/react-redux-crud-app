import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getEvent, deleteEvent, putEvent} from '../actions';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';

export class EventsShow extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    renderField(field){
            const { input, label, type, meta: { touched, error} } = field;
            return (<div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>);
        }
    
    //onSubmitは非同期処理
    async onSubmit(value){
        await this.props.postEvent(value);
        this.props.history.push('/');
    }

    async onDeleteClick(){
        const {id} = this.props.match.params;
//        console.log(id);
        await this.props.deleteEvent(id);
        this.props.history.push('/');
    }

    render(){
        return (
            <Link to="/" onClick={this.onDeleteClick}>Delete</Link> 
        );
    }
}

const mapDispatchToProps = ({deleteEvent});

const validate = values => {
    const errors = {};

    if(!values.title) errors.title = "Enter a title, please.";
    if(!values.body) errors.body = "Enter a body, please."

    return errors;
}


export default connect(null, mapDispatchToProps)(
    reduxForm({validate, form: 'eventShowForm' })(EventsShow)
);

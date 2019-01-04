// BlogForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { postDiscussion } from 'actions/';
import BlogField from './BlogField';
import formFields from './formFields';

class BlogForm extends Component {
    onSubmit = (values) => {
        const { history } = this.props;
        this.props.postDiscussion(values, () => {
          console.log('put success!');
    });
    }

     renderFields() {
          return _.map(formFields, ({ label, name }) => {
               return(
                    <Field key={name} component={BlogField} type="text" label={label} name={name} />
               );
          });
     };
     render() {
          const { handleSubmit } = this.props;
          return (
               <div>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                         {this.renderFields()}
                         <Link to="/">
                              Cancel
                         </Link>
                         <button type="submit">
                              Next
                         </button>
                    </form>
               </div>
          )
     }
};
<<<<<<< HEAD

=======
>>>>>>> nguyen
function validate(values) {
     const errors = {};
     _.each(formFields, ({name}) => {
          if (!values[name]) {
               errors[name] = 'You must provide a value';
          }
     });
     return errors;
}
export default reduxForm({
     validate,
     form: 'blogForm',
     destroyOnUnmount: false
})(connect(null, {postDiscussion})(BlogForm));

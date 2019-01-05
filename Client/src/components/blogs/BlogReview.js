import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import formFields from './formFields';
import * as actions from '../../actions';

const BlogReview = ({ onCancel, formValues, postDiscussion, history }) => {
     const reviewField = _.map(formFields, ({name, label}) => {
          return(
               <div key={name}>
                    <label>{label}</label>
                    <div>
                         {formValues[name]}
                    </div>
               </div>
          )
     });
     return (
          <div>
               <h5>Review your blog: </h5>
               {reviewField}
               <button
                    onClick={onCancel}
               >
                    Back
               </button>
               <button
                    onClick={() => postDiscussion(formValues, history)}
               >
                    Publish blog
               </button>
          </div>
     );
};
function mapStateToProps(state) {
     console.log(state);
     return{
          formValues: state.form.blogForm.values
     };
};
export default connect(mapStateToProps, actions)(withRouter(BlogReview));

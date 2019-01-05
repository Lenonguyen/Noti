import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import BlogForm from './BlogForm';
import BlogReview from './BlogReview';

class BlogNew extends Component {
     state = { showFormReview: false };
     renderBlog() {
          if ( this.state.showFormReview === true ){
               return <BlogReview
                    onCancel={() => this.setState({ showFormReview: false })}
               />
          }
          return(
               <BlogForm
                    onBlogSubmit={() => this.setState({ showFormReview: true })}
               />
          )
     }
     render() {
          return(
               <div>
                    {this.renderBlog()}
               </div>
          )
     }
};
export default reduxForm({
     form: 'blogForm'
})(BlogNew);

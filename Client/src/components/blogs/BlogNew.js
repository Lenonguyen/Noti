import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import BlogForm from './BlogForm';

class BlogNew extends Component {
     renderBlog() {
          return(
               <BlogForm />
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
     form: 'blogForm',
})(BlogNew);

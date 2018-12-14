const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Blog = mongoose.model('Blog');

module.exports = app => {
     app.get('/api/blogs');
     
     //Post a blog
     app.post('/api/blogs', requireLogin, async (req,res) => {
          const {title, content} = req.body;

          const blog = new Blog({
               title,
               content,
               _user: req.user.id
          });

          try {
               await blog.save();
               res.send(blog);
          } catch(err) {
               res.send(400, err);
          }
     });
};

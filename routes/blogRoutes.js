const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Blog = mongoose.model('Blog');

module.exports = (app) => {
     //Get a blog
     app.get('/api/blogs/:id', async (req,res) => {
          const blog = await Blog.FindById(req.params.id);
          res.send(blog);
     });

     app.get('/api/blogs', async (req,res) => {
          const blogs = await Blog.find({});
          res.send(blogs);
     });
     //Post a blog
     app.post('/api/blogs', requireLogin, async (req,res) => {
          const { title, content } = req.body;

          const blog = new Blog({
               title,
               content,
               _user: req.user.id
          });
          try {
               await blog.save();
               res.send(blog);
          } catch (err) {
               res.send(400,err);
          }
     });

     //Update a blog
     app.put('/api/blogs/:id', async (req,res) => {
          const blog = await Blog.FindByIdAndUpdate(req.params.id);
          res.send(blog);
     });
     //Delete a blog
     app.delete('/api/blogs/:id', (req,res) => {
          Blog.FindByIdAndRemove(req.params.id);
          res.send(200, 'Deleted successfully!');
     });
};

const Blog = require('../models/blogModel.js');

const blog_dashboard = (req,res) =>{
  Blog.find()
    .then(results => {
      res.render('dashboard',{results: results})
    })
    .catch(error => {
      console.log(error);
      res.status(404).render('404');
    });
}

const blog_post = async (req ,res)=>{
  var blog = new Blog(req.body);
  await blog.save()
   .then(response => {res.redirect('/dashboard')})
   .catch(error => console.log(error))
}

const blog_delete = async (req ,res)=>{
  const id = req.params.id;
  await Blog.findByIdAndDelete(id)
    .then(response => {res.json({msg:"Delete Complete!!",id:id})})
    .catch(error => {res.json({msg:"Error On Delete..." , id:id})})
}
const blog_put = async (req ,res)=>{

  const id = req.params.id;
  const blog = new Blog(req.body);

  const blog_title = req.body.title;
  const blog_snippet = req.body.snippet;
  const blog_body = req.body.body;

  console.log("blog_put...");

  await Blog.findByIdAndUpdate(id,{title:blog_title , snippet:blog_snippet , body:blog_body})
    .then(response =>{
      console.log(response)
      res.json({msg:"Update Complete"})
    })
    .catch(
      (error) => {
        console.log(error)
        res.json({msg:"Update Error"});
      })
}

module.exports = {
  blog_dashboard,
  blog_post,
  blog_delete,
  blog_put
}

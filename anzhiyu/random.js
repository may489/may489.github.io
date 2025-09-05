var posts=["2025/09/04/Hexo安装安知鱼主题/","2025/09/05/再来一篇/","2025/09/05/Hugo搭建个人博客网站/","2025/09/04/hello-world/","2025/09/02/my-second-blog/","2025/09/02/test-my-site/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
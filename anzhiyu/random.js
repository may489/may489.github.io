var posts=["2025/09/05/再来一篇/","2025/09/05/一篇buowen/","2025/09/05/test-my-site/","2025/09/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
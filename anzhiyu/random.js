var posts=["2025/09/02/hello-world/","2025/09/02/test-my-site/","2025/09/02/my-second-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
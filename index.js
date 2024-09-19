class BlogPost {
    constructor(title, content, author, createdAt = new Date()) {
      this.title = title;
      this.content = content;
      this.author = author;
      this.createdAt = createdAt;
    }
  }
  
  class BlogUser {
    constructor(username, fullName) {
      this.username = username;
      this.fullName = fullName;
      this.blogPosts = [];
    }
  
     createPost(title, content){
        const newPost = new BlobPost (title, content, this.username);
        this.blogPosts.push(newPost);
        console.log(`Post created: ${title} by ${this.username}`)
     }

     editPost(title, newContent){
         const postIndex = this.posts.findIndex((post) => post.title ===title);
         if (postIndex !== -1){
            this.BlogPosts[postIndex].content = newContent;
            console.log(`Post edited: ${title} by ${this.fullName}` );
               }else{
                console.log(`Post not found: ${title}`);
               }
     }


     deleteLastPost(){
        if(this.BlogPosts.length > 0){
            this.blogPosts.pop();
            console.log(`Last post deleted by ${this.fullName}` );
        }else{
            console.log(`No posts to delete`);
        }
     }

     displayPosts() {
        console.log(`Posts by ${this.fullName}:`);
        this.blogPosts.forEach((post) => {
          console.log(`Title: ${post.title}, Content: ${post.content}, Created at: ${post.createdAt}`);
        });
      }


  }
  
  const user1 = new BlogUser('NgunzaRamos', 'Ngunza Ramos');
const user2 = new BlogUser('NgunzaRamos', 'Ngunza Ramos');

user1.createPost('Post 1', 'This is my first post');
user1.createPost('Post 2', 'This is my second post');
user2.createPost('Post 3', 'This is my third post');
user2.createPost('Post 4', 'This is my fourth post');
  
user1.editPost('Post 1', 'This is my updated first post');

user2.deleteLastPost();

user1.displayPosts();
user2.displayPosts();


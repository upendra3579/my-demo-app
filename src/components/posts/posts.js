function Posts(posts) {
  
    const posts = props.posts;
    const listItems = posts.map((Post) =>
      <li>{post}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  export default Posts;
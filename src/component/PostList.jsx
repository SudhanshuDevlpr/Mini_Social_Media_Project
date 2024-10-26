// PostList.js
import { useEffect, useContext, useState } from "react";
import Post from "./Post";
import { refContext } from "../Store/CreateContext";
import PostLength from "./PostLength";
import LoadSpinner from "./LoadSpinner";


function PostList() {
  const { paintpost, addInitialPost } = useContext(refContext);
  const [Loader, setLoader]=useState(true)

  // Fetch posts from the API and store them in context
  const paintpostfun = () => {
  
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        addInitialPost(data.posts); // Add posts to context
        setLoader(false)
      })
  };

  //Use useEffect to fetch posts when the component mounts
  useEffect(() => {
    paintpostfun();
 
  }, []);

  // Render a message if no posts are available
  if(Loader===true){
    return <LoadSpinner/>
  }else{
  if (paintpost.length === 0) {
    return <PostLength paintpostfun={paintpostfun} />;
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {paintpost.map((item) => (
          <div className="col-lg-3 col-sm-12 p-1" key={item.id}>
            <Post item={item} />
          </div>
        ))}
        
      </div>
    </div>
  );
}
}
export default PostList;

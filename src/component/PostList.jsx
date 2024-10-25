import Post from "./Post";
import { refContext } from "../Store/CreateContext";
import { useContext } from "react";
function PostList() {
  const paintpost = useContext(refContext);
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          {paintpost.map((item) => (
            <div className="col-lg-3 col-sm-12 p-1">
              <Post key={item.id} item={item}></Post>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default PostList;

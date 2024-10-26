import { useContext } from 'react';
import { FaBeer, FaApple } from 'react-icons/fa'; // Font Awesome
import { FaDeleteLeft } from "react-icons/fa6";
import { refContext } from '../Store/CreateContext';

function Post({ item }) {
  const { deletePost } = useContext(refContext);

  // Function to truncate body to 40 words
  const truncateBody = (body, wordLimit) => {
    const words = body.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return body;
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="src/assets/1.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{truncateBody(item.body, 40)}</p>
        <div className="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-primary">
            {item.reactions.likes}
          </a>
          <button type="button" className="btn btn-danger position-relative">
            Like
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {item.reactions.dislikes}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <FaDeleteLeft className='fs-2' onClick={() => deletePost(item.id)} />
        </div>
      </div>
    </div>
  );
}

export default Post;

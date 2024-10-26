import { useContext, useRef } from "react";
import { refContext } from "../Store/CreateContext";

function CreatePost() {
  const { addPost } = useContext(refContext);
  
  // Using separate refs for each input
  const usernameElement = useRef();
  const titleElement = useRef();
  const reactionElement = useRef();
  const hashtagElement = useRef();
  const bodyElement = useRef();

  function handleOnSubmit(event) {
    event.preventDefault(); // Corrected from prevenDefault to preventDefault

    // Correctly accessing the value from refs
    const username = usernameElement.current.value;
    const title = titleElement.current.value;
    const reaction = reactionElement.current.value;
    const body = bodyElement.current.value;

    // Adding the post
    addPost(username, title, reaction, body);

    // Resetting input fields
    usernameElement.current.value = '';
    titleElement.current.value = '';
    reactionElement.current.value = '';
    bodyElement.current.value = '';
    hashtagElement.current.value = ''; // Resetting hashtag input
  }

  return (
    <div className="container">
      <div className="row m-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form className="m-2" onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-medium">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-2"
                    id="username"
                    ref={usernameElement} // Set the ref correctly
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    ref={titleElement} // Set the ref correctly
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="reaction" className="form-label">
                    Reaction
                  </label>
                  <input
                    type="text" // Changed from password to text
                    className="form-control"
                    id="reaction"
                    ref={reactionElement} // Set the ref correctly
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="hashtag" className="form-label">
                    Hashtag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="hashtag"
                    ref={hashtagElement} // Set the ref correctly
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    Body
                  </label>
                  <textarea
                    className="form-control"
                    id="body"
                    rows={4}
                    ref={bodyElement} // Set the ref correctly
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

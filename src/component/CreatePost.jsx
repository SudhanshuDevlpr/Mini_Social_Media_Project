function CreatePost() {
  return (
    <>
      <div className="container">
        <div className="row m-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <form className="m-2">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-medium">
                      User Name
                    </label>
                    <input
                      type="email"
                      className="form-control border-2"
                      id="username"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="title1" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title1"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reaction" className="form-label">
                      Reaction
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="reaction"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="hashtag" className="form-label">
                      Hashatag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="reaction"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea name="body" className="w-100" id="body" rows={4}></textarea>
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
    </>
  );
}

export default CreatePost;

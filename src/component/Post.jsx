function Post({ item }) {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src="src/assets/1.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.body}</p>
          <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="d-flex justify-content-between">
            <a href="#" class="btn btn-primary">
              {item.reactions}
            </a>
            <button type="button" class="btn btn-danger position-relative">
              Like
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;

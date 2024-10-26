function PostLength({paintpostfun}){
    return <>
    <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold">Currently Post are not available</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">please first create post or otherwise click on button below to fetch all post from serve to see and try to give reaction on every</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onClick={()=>
            {
              paintposfun()
            }
        }>Fetch all post</button>
      </div>
    </div>
    {/* <div class="overflow-hidden" style={{ maxHeight: '30vh' }}>
      <div class="container px-5">
        <img src="bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
      </div>
    </div> */}
  </div>
    </>
}
export default PostLength;
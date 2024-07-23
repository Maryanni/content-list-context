function Contact() {
  return (
    <div className="container">
      <div className="containerContact">
        <h1 className="text-center">Add a new contact</h1>
        <form className="formStyle">
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter phone"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter address"
            />
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              Save
            </button>
          </div>
          <p>
            <a class="link-opacity-100-hover" href="#">
              Link hover opacity 100
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;

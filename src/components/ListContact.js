function ListContact() {
  return (
    <div className="container">
      <div className="containerContact">
        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    src="../logo192.png"
                    class="img-thumbnail imagenList"
                    alt="..."
                  ></img>
                </div>
                <div className="ms-5">Texto aqui</div>
              </div>

              <div className="d-wrap justify-content-end">
                <i class="fa-solid fa-pencil me-5"></i>
                <i class="fa-solid fa-trash-can me-3"></i>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListContact;

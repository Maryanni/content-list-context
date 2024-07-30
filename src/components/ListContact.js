import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

function ListContact(props) {
  const state = useContext(Context);

  const modalId = `exampleModal${props.id}`;

  return (
    <div className="list-group">
      <button
        type="button"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src="../logo192.png"
                className="img-thumbnail imagenList"
                alt="..."
              ></img>
            </div>
            <div className="ms-5">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">
                      <i className="fa-solid fa-user"></i>
                    </th>
                    <th scope="col">{props.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <i className="fa-solid fa-location-dot"></i>
                    </th>
                    <td>{props.address}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa-solid fa-phone"></i>
                    </th>
                    <td>{props.phone}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa-solid fa-envelope"></i>
                    </th>
                    <td>{props.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="d-wrap justify-content-end">
            <i className="fa-solid fa-pencil me-5"></i>
            <i
              className="fa-solid fa-trash-can me-3"
              data-bs-toggle="modal"
             // data-bs-target="#exampleModal"
              data-bs-target={`#${modalId}`}
            ></i>
          </div>
        </div>
      </button>
      <div
                  className="modal fade"
                  // id="exampleModal"
                  id={modalId}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          If you delete this thing the entire universe will go
                          down
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Oh no!
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-target={`#${modalId}`}
                          data-bs-dismiss="modal"
                          onClick={() => state.actions.deleteContact(props.id)}
                        >
                          Yes, baby!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
      
    </div>
  );
}

export default ListContact;

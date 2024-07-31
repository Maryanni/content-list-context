import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";

function Contact() {
  const state = useContext(Context);
  const {id} = useParams();

  useEffect(() => {
    state.actions.getContactById(id);
  }, [id]);

  return (
    <div className="container">
      <div className="containerContact">
        <h1 className="text-center">{id ? "Edit contact" : "Add a new contact"}</h1>
        
        <form className="formStyle">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={state.store?.name}
              onChange={state.actions.handlerOnChange}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Email
            </label>
            <input
              name="email"
              value={state.store?.email}
              onChange={state.actions.handlerOnChange}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Phone
            </label>
            <input
              name="phone"
              value={state.store?.phone}
              onChange={state.actions.handlerOnChange}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Address
            </label>
            <input
              name="address"
              value={state.store?.address}
              onChange={state.actions.handlerOnChange}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter address"
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={id ? () => state.actions.putContact(id) : state.actions.postContact}>
              Save
            </button>
          </div>
          <p>
            <Link className="nav-link backHome" aria-current="page" to="/">
              Get back to contacts
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;

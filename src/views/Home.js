import logo from "../logo.svg";
import "../App.css";
import Contact from "./Contact";
import ListContact from "../components/ListContact";
import Message from "../components/Message";
import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";

function Home() {
  const state = useContext(Context);

  useEffect(() => {
    state.actions.getContact();
  }, []);
  return (
    <div className="container containerList">
      <div className="containerContact">
        <Link
          className="btn btn-primary btn-sm my-3"
          aria-current="page"
          to="/account"
        >
          Add new contact
        </Link>

        {state.store.contacts.length > 0 ? (
          state.store.contacts.map((item, index) => {
            return (
              <div key={index}>
                <ListContact
                  name={item.name}
                  phone={item.phone}
                  email={item.email}
                  address={item.address}
                  id={item.id}
                />
              </div>
            );
          })
        ) : (
          <Message />
        )}
      </div>
    </div>
  );
}

export default Home;

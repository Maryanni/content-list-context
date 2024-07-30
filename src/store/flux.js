const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      contacts: [],
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    actions: {
      getContact: (contact) => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/maryanni/contacts",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({
              contacts: data.contacts,
            });
            console.log(data);
            getActions().saludo();
          })
          .catch((error) => console.log(error));
      },
      handlerOnChange: (e) => {
        setStore({ [e.target.name]: e.target.value });
      },
      postContact: () => {
        //Con destructiración
        const { name, phone, email, address } = getStore();
        const contact = { name, phone, email, address };
        //Sin destructiración

        // const store = getStore();
        //const contact2 = {name: store.name, phone: store.phone, email: store.email, address: store.address}
        fetch(
          "https://playground.4geeks.com/contact/agendas/maryanni/contacts",
          {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .catch((error) => console.log(error));
        setStore({ name: "", phone: "", email: "", address: "" });
      },
    },
  };
};

export default getState;

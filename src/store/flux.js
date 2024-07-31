import { Alert } from "bootstrap";

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
      getContactById: (id) => {
            const {contacts} = getStore();
            setStore({ name: "", phone: "", email: "", address: "" });
            contacts.forEach((item) => {
                if(item.id == id){
                    setStore({
                        name: item.name,
                        phone: item.phone,
                        email: item.email,
                        address: item.address,
                      });
                }
            })
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
      deleteContact : (contactList) =>{
        fetch(`https://playground.4geeks.com/contact/agendas/maryanni/contacts/${contactList}`, 
            {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        })
       .then((response) => {
            if (response.ok) {
              getActions().getContact(); // Llama a getContact para actualizar la lista de contactos
            } 
          })
          .catch((error) => console.log(error));
   
          
      },
      putContact: (contactId) => {
        const { name, phone, email, address } = getStore();
        const contact = { name, phone, email, address };
        fetch(`https://playground.4geeks.com/contact/agendas/maryanni/contacts/${contactId}`,{
            method: "PUT",
            body: JSON.stringify(contact),
            headers: {
              "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log(response.status);
            if(response.status === 200){
                response.json();
                alert("Guardado con exito");
            }else{
                alert("Fallido");
            }
        })
        .catch((error) => console.log(error));
      }
    },
  };
};

export default getState;

"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    
    add(info) {
        this.contacts.push(info);
    }
    
    deleteAt(index){
        this.contacts.splice(index, 1)
    }

    display(){
        let elements = document.getElementsByClassName("contact-info");
        
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }

        for (let i = 0; i < this.contacts.length; i++) {
        
            const contactsContainer = document.createElement("section");
            contactsContainer.className = "contact-info"
            contactsContainer.id = i.toString();
            contactsContainer.id = `person${i}`;
            contactsContainer.innerHTML = `
            <p>Name: ${this.contacts[i].name}</p>
            <p>E-mail: ${this.contacts[i].email}</p>
            <p>Phone: ${this.contacts[i].phone}</p>
            <p>Relation: ${this.contacts[i].relation}</p>
            <section class="contact-container">
                <i class="material-icons md-24" onClick="removePerson(${[i]});">delete</i>
            </section>
            `;
            
            document.body.appendChild(contactsContainer);
        }
    }
}

// Removes contact 
function removePerson(index){
        book.deleteAt();
        console.log(index);
        // console.log("clique");
        book.display();
    }

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let book = new AddressBook();

// Add contacts from form after pressing 'add button'
document
    .querySelector("#add-btn")
    .addEventListener("click", () => {
    
    const inputs = document.querySelectorAll(".contact-input");
    let name = inputs[0].value;
    let email = inputs[1].value;
    let phone = inputs[2].value;
    let relation = inputs[3].value;

    book.add(new Contact(name, email, phone, relation));

    book.display();
    });
;

book.display();











"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    
    add(info) {
        this.contacts.push(info);
        // console.log("contacts size: " + this.contacts.length);
    }
    
    deleteAt(index){
        this.contacts.splice(index, 1)
    }

    // print(){
    //     for (let contact of this.contacts) {
    //         console.log(contact);
    //     }
    // }

    display(){
        let elements = document.getElementsByClassName("contact-info");
        // console.log("elements size: " + elements.length);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        for (let i = 0; i < this.contacts.length; i++) {
        
            const contactsContainer = document.createElement("section");
            contactsContainer.className = "contact-info"
            contactsContainer.id = i.toString();
            contactsContainer.innerHTML = `
            <p>Name: ${this.contacts[i].name}</p>
            <p>E-mail: ${this.contacts[i].email}</p>
            <p>Phone: ${this.contacts[i].phone}</p>
            <p>Relation: ${this.contacts[i].relation}</p>
            <section class="contact-container">
                <i class="material-icons md-24">delete</i>
            </section>
            `;
            
            document.body.appendChild(contactsContainer);

        //    const deleteBtn = document.getElementsByClassName("material-icons");
        //    deleteBtn.addEventListener("click", () => {
        //        const trash = document.querySelectorAll("")
        //        console.log("deleted!");
                // book.deleteAt(index);
        //    });

            let contactList = document.getElementById("");
            console.log(contactList);
            
            document 
                .querySelector(".material-icons")
                .addEventListener("click", () => {
                console.log("clicked!");
            
                // book.deleteAt(index);

                // book.display();
                });

            ;
        }
        
    }
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

// --- Add contacts from form after pressing 'add button'---
document
    .querySelector("#add-btn")
    .addEventListener("click", () => {
    // console.log("added!");
    const inputs = document.querySelectorAll(".contact-input");
    // console.log("yo yo yo" + " " + inputs);
    // console.log("inputs[0]: " + inputs[0].value);
    let name = inputs[0].value;
    let email = inputs[1].value;
    let phone = inputs[2].value;
    let relation = inputs[3].value;

    book.add(new Contact(name, email, phone, relation));

    book.display();
    });
;

// Delete contact icons
// document 
//     .querySelector(".material-icons md-24")
//     .addEventListener("click", () => {
//         console.log("clicked!");
    
//         book.deleteAt(index);

//         book.display();
//     });

// ;

// document 
//     .querySelector(".delete-icon-2")
//     .addEventListener("click", () => {
//         console.log("clicked!");
    
//         // book.deleteAt(index);
//         // book.display();
//     });

// ;

// document 
//     .querySelector(".delete-icon-3")
//     .addEventListener("click", () => {
//         console.log("clicked!");
    
//         // book.deleteAt(index);
//         // book.display();
//     });

// ;


book.display();











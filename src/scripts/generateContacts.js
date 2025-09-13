import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    const contacts = await readContacts();
    for (let i = 0; i < number; i += 1){
        const contact = createFakeContact();
        contacts.push(contact);
    };
    await writeContacts(contacts);
    console.log("Contacts:", contacts);
};

generateContacts(5);

import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const contacts = await readContacts();
    const count = contacts.length;
    return count;
};

console.log(await countContacts());

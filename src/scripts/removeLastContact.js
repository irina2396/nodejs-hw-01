import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    const contacts = await readContacts();
    const removedContact = contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    return removedContact;
};

removeLastContact();

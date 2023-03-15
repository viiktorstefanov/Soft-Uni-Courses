const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getContacts();

    res.render('index', { contacts });

  },
  addPhonebookPost: (req, res) => {

    let name = req.body.name;
    let number = req.body.number;

    const contact = new Contact(name, number);

    phonebook.addContact(contact);

    res.redirect('/');

  }
}
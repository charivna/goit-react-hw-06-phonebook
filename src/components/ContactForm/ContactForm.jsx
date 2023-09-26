import { useState } from 'react';
import { ButtonAdd, Form, Input, Label } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      addContact({
        name: name,
        number: number,
        id: nanoid(),
      })
    );

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form type="submit" onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
      />

      <Label htmlFor="tel">Number</Label>
      <Input
        type="text"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
        onChange={handleChange}
        value={number}
      />
      <ButtonAdd type="submit"> Add contact</ButtonAdd>
    </Form>
  );
};

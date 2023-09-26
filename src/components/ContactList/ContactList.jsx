import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './Contact';
import { List } from './ContactList.styled';
import { deleteContact, getContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onClick={() => dispatch(deleteContact(id))}
        />
      ))}
    </List>
  );
};

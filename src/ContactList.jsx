import React from 'react'
import ContactCard from './ContactCard';

export default function ContactList(props){
    const Contactlist = props.contacts.map((contacts)=>{
        return(
            <ContactCard contacts={contacts}/>
        )
    })
    return(
       <div className='ui celled list'>{Contactlist}</div>
    );
}
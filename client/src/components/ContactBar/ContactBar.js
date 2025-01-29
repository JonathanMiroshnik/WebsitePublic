import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import './ContactBar.css';
import '../ContentContainer/ContentContainer.css';
import { ContactBarVisibility } from './ContactBarVisibility';

export function ContactBar() {
    // Email sending
    const [emailMessage, setEmailMessage] = useState('');

    // TODO: get this email sender to work
    const handleSendEmail = () => {
        alert(`Email Sent: ${emailMessage}`);
        setEmailMessage('');
    };

    return (
        <div className="contentContainer">
            <footer className="contact-bar">
                <ContactBarVisibility /> { /* I have no idea if this is a good way of doing this, but it workds! */ }
                <div className="contact-left">
                    <p><Icon icon="solar:mailbox-linear" width="24" height="24"/>             <a href="mailto:jonathanmiroshnik@gmail.com">jonathanmiroshnik@gmail.com</a></p>
                    <p><Icon icon="solar:people-nearby-linear" width="24" height="24"/>             <a href="https://www.linkedin.com/in/jonathan-miroshnik-711b52334/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
                    <p><Icon icon="solar:document-text-linear" width="24" height="24"/>             <a href="/media/text/JonathanMiroshnik.pdf" download="JonathanMiroshnik.pdf">View My CV</a></p>
                </div>
                <div className="contact-right">
                    <textarea
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                        placeholder="Send me an E-Mail!"
                    />
                    <button onClick={handleSendEmail}>Send</button>
                </div>
            </footer>
        </div>
    );
}

export default ContactBar;

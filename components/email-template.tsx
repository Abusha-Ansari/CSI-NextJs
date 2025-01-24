import * as React from 'react';

interface EmailTemplateProps {
  user: string;
  userEmail: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  user,userEmail,message
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
    <p><strong>From:</strong> {user}</p>
    <p><strong>Email:</strong> {userEmail}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>

);

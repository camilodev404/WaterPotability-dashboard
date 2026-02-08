import React from 'react';
import './MemberCard.css';

function MemberCard({ name, avatar }) {
  return (
    <div className="member-card">
      <div className="member-avatar-container">
        <img src={avatar} alt={name} className="member-avatar" />
      </div>
      <h3 className="member-name">{name}</h3>
    </div>
  );
}

export default MemberCard;
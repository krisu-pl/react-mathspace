import React from 'react';

const UserAvatar = () => {
  return (
    <div className="user-avatar">
      <div className="user-avatar__notification"/>
      <img src="assets/img/avatar@2x.png" className="user-avatar__image" alt="User" />
    </div>
  );
};

export default UserAvatar;

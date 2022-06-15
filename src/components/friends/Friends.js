import React from 'react';
import PropTypes from 'prop-types';
import s from 'components/friends/Friends.module.css';


export default function FriendList({friends}) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

const FriendListItem = ({ id, name, avatar, isOnline }) => {
 return (
   <li className={s.item} key={id}>
     <span
       className={s.status}
       style={{ backgroundColor: isOnline ? 'green' : 'red' }}
     >
     </span>
     <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
     <p className={s.name}>{name}</p>
   </li>
 );
 }



FriendList.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
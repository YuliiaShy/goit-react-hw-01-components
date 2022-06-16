import React from 'react';
import PropTypes from 'prop-types';
import s from 'components/Friend/FriendList.module.css';
import FriendListItem from "components/Friend/FriendListItem"

export default function FriendList({friends}) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

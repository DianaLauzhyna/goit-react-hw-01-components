import PropTypes from 'prop-types';
import {
  Friends,
  FriendsItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <Status status={friend.isOnline} />
          <Avatar src={friend.avatar} alt="User avatar" />
          <Name>{friend.name}</Name>
        </FriendsItem>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

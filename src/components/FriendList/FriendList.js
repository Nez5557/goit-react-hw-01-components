import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOneLine={friend.isOneLine}
        key={friend.id.toString()}
      />  
    ))}
  </ul>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOneLine: PropTypes.string.isRequired,
};

export default FriendList;

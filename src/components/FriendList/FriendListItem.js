import defaultImage from "../default.jpg";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ friends }) =>
  friends.map(({ id, isOnline, avatar, name }) => (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  ));

FriendListItem.defaultProps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: defaultImage,
    })
  ),
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;

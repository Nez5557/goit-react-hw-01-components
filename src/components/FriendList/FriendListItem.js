import styles from "./FriendList.module.css";

function friendOnline(status) {
  if (status) {
    return "#21db21";
  } else {
    return "#d40606";
  }
}

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status} styles={{ color: friendOnline(isOnline) }} >
        {" "}
        •
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
} 

  export default FriendListItem;


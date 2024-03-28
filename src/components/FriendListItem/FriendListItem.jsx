import { Item, Avatar, Status, Name } from "./FriendListItem.styled";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <Status $online={isOnline} />
      <Avatar src={avatar} alt={`${name}'s avatar`} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

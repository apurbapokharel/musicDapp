import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

function GroupAvatars() {

    const avatarImageStyle = {
        width: 40,
        height: 40,
    };

  return (
    <AvatarGroup max={1}>
      <Avatar alt="Remy Sharp" style={ avatarImageStyle} src="https://i.pinimg.com/236x/27/7c/15/277c15409a7b07da1c169933e7692828--taylor-swift-curls-pictures-of-taylor-swift.jpg" />
      <Avatar alt="Travis Howard" style={ avatarImageStyle } src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr-KszQnH2LyOcnGcyGQ4HzYJX_-2LmNnsnw&usqp=CAU" />
      <Avatar alt="Cindy Baker" style={avatarImageStyle} src="https://www.rollingstone.com/wp-content/uploads/2019/08/taylor-swift-ultimate-album-sheff.jpg?resize=1800,1200&w=1800" />
    </AvatarGroup>
  );
}
export default GroupAvatars;
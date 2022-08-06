import React from "react";
import "./Profile.css";
import PropTypes from 'prop-types'


const Profile = ({user}) => {
    let {avatar, location, stats,tag, username} = user

     return <div className="profile">
        <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li> 
  </ul>
</div>

}

Profile.propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number
        }).isRequired,
        tag: PropTypes.string,
        username: PropTypes.string.isRequired
    })
}

export default Profile;
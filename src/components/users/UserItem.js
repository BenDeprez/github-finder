import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://api.github.com/users/mojombo"
  };

  render() {
    const { avatar_url, login, html_url } = this.state;
    return (
      <div>
        <div className='car text-center'>
          <img
            src={avatar_url}
            alt='avatar'
            className='round-img'
            style={{ width: "60px" }}
          />
          <h3>{login}</h3>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            more
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;

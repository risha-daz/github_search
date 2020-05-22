import React, { useEffect, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Repos from "../users/Repos/Repos";
import Spinner from "../divisions/Spinner";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    login,
    avatar_url,
    hireable,
    html_url,
    bio,
    blog,
    company,
    location,
    public_repos,
    public_gists,
    followers,
    following,
  } = githubContext.user;
  if (githubContext.loading === true) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Link to='/' className='btn btn-light'>
          Back
        </Link>{" "}
        Hireable?{" "}
        {hireable ? (
          <i className='fa fa-check text-success'></i>
        ) : (
          <i className='fa fa-times-circle text-danger'></i>
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              style={{ width: "150px" }}
              alt='avatar'
            />
            <h2>{name}</h2>
            Location: {location}
          </div>
          <div>
            {bio && (
              <Fragment>
                <h2>Bio</h2>
                {bio}
              </Fragment>
            )}

            <ul>
              <li>
                {html_url && (
                  <button className='btn btn-dark'>Visit GitHub</button>
                )}
              </li>

              <li>
                <Fragment>
                  <b>Username: </b>
                  {login}
                </Fragment>
              </li>

              <li>
                {company && (
                  <Fragment>
                    <b>Company: </b>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <b>Website: </b>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-success'>Followers: {followers}</div>
          <div className='badge badge-danger'>Following: {following}</div>
          <div className='badge badge-dark'>Public Repos: {public_repos}</div>
          <div className='badge badge-white'>Public GIsts: {public_gists}</div>
        </div>
        <div className='card'>
          <Repos />
        </div>
      </div>
    );
  }
};

export default User;

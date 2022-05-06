import React, { useState } from 'react';
import classes from './Auth.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';
import { useNavigate } from 'react-router-dom';
import { useVideos } from '../../context/videos/videos-context';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const { videosDispatch } = useVideos();
  const navigate = useNavigate();
  const location = useLocation();

  let navigateTo = location.state?.from?.pathname || '/';
  console.log(navigateTo);

  const loginClickHandler = async (e) => {
    e.preventDefault();
    try {
      let { status, user } = await login(
        {
          email: e.target.email.value,
          password: e.target.password.value,
        },
        rememberMe
      );

      if (status === 200) {
        //  Initialize playlist, history and liked videos here
        console.log(user);
        videosDispatch({
          type: 'UPDATE_LIKED_VIDEOS',
          payload: { likedVideos: user.likes },
        });
        videosDispatch({
          type: 'UPDATE_WATCH_LATER_VIDEOS',
          payload: { watchlaterVideos: user.watchlater },
        });
        videosDispatch({
          type: 'UPDATE_PLAYLISTS',
          payload: { playlists: user.playlists },
        });
        videosDispatch({
          type: 'UPDATE_HISTORY',
          payload: { history: user.history },
        });
        navigate(navigateTo, { replace: true });
      } else {
        alert('Invalid email or password');
      }
    } catch (err) {
      alert(err);
    }
  };

  const guestLogin = async () => {
    try {
      let { user, status } = await login(
        {
          email: 'adarshbalika@gmail.com',
          password: 'adarshBalika123',
        },
        rememberMe
      );

      console.log(user);
      if (status === 200) {
        //  Initialize playlist, history and liked videos here
        videosDispatch({
          type: 'UPDATE_LIKED_VIDEOS',
          payload: { likedVideos: user.likes },
        });
        videosDispatch({
          type: 'UPDATE_WATCH_LATER_VIDEOS',
          payload: { watchlaterVideos: user.watchlater },
        });
        navigate(navigateTo, { replace: true });
      } else {
        alert('Invalid email or password');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <section className={classes['main-content']}>
        <form onSubmit={loginClickHandler} className={classes['card']}>
          <h1>CloudStore</h1>
          <h3>Login</h3>
          <input
            className={classes['creds']}
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <input
            className={classes['creds']}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <div className={classes['options']}>
            <div className={classes['remember-chk']}>
              <input
                onChange={() => {
                  setRememberMe((prevState) => !prevState);
                }}
                id="remember-me"
                type="checkbox"
              />
              <span htmlFor="remember-me">Remember me</span>
            </div>
            <Link to="/" className={classes['forgot-pass']}>
              <span className={classes.link}>Forgot your password?</span>
            </Link>
          </div>
          <div
            onClick={guestLogin}
            className={`${classes['forgot-pass']} ${classes.guest}`}
          >
            <span className={classes.link}>Guest login</span>
          </div>
          <button type="submit" className={classes['auth-btn']}>
            LOGIN
          </button>

          <span>Not a member?</span>
          <Link to="/signup">
            <span className={classes.link}>Join us</span>
          </Link>
        </form>
      </section>
    </div>
  );
};

export { Login };

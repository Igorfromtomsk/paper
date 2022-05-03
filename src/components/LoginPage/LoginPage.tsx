import React from 'react';
import GoogleLogin from 'react-google-login';
import styles from './LoginPage.module.css';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const handleLogin = async (googleData: any) => {
    console.log({ googleData });
    const res = await fetch('/auth/google', {
        method: 'POST',
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log({ data });
    // store returned user somehow
  }
  
  return (
    <div className={styles.loginPage}>
      <h1>LoginPage</h1>
      <GoogleLogin
        clientId="302862620179-2or5nvaui961a0ld7f4qcgg9rcnhhfhv.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
};

export default LoginPage;

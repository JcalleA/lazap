import React from "react";
import { UserAuth} from '../../context/firebase/AuthContext/AuthContext'
import { useNavigate } from "react-router-dom";

const Home = () => {

  const clienid="2s52ej34384isqp62kd20fmgd2:r8evla2ukqbqieujm2rijo7vvmn6cdr696vgt4kelhidc3a15l3"
  const clientidCod = btoa(clienid)

  const navigate = useNavigate()

  const {user,googleLogin,logOut} = UserAuth();
  

  return user ? (
    <div>
      <div>Bienbenido restaurante </div>
      <h1>{user.displayName}</h1>
      <img src={user.photoURL}></img>
      <button onClick={()=>{logOut()}}>Logout</button>
      <button onClick={()=>{navigate('/menu')}}>Menu</button>
    </div>
  ) : (
    <div>
      <div>Bienbenido restaurante </div>

      <button
        onClick={() => {
          googleLogin();
        }}
      >
        Google
      </button>
    </div>
  );
};

export default Home;



// UserImpl {providerId: 'firebase', proactiveRefresh: ProactiveRefresh, reloadUserInfo: {…}, reloadListener: null, uid: 'uDEoVtC4vwgC5p0PvL347zVaQ6k1', …}
// accessToken
// : 
// eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MGI5ZGUwODBmZmFmYmZjMTgzMzllY2Q0NGFjNzdmN2ZhNGU4ZDMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSmhvbmF0YW4gQ2FsbGUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZkRfZDViTUJSc01WS3JKM1pxZEhCeFVsTE8wVFZxQzFueGRGMnBoblN0RWxvPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2FwcGxheiIsImF1ZCI6ImFwcGxheiIsImF1dGhfdGltZSI6MTY5MzE4NTYxNywidXNlcl9pZCI6InVERW9WdEM0dndnQzVwMFB2TDM0N3pWYVE2azEiLCJzdWIiOiJ1REVvVnRDNHZ3Z0M1cDBQdkwzNDd6VmFRNmsxIiwiaWF0IjoxNjkzMTg1NjE3LCJleHAiOjE2OTMxODkyMTcsImVtYWlsIjoia2FsbGUuMzQxMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMTE0NzAyOTU3NzEzNTczOTk1MyJdLCJlbWFpbCI6WyJrYWxsZS4zNDExQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.Z-2aVzGOArpBtvfJ8OtpXoMZqBnu937yvdk3sM5IhGx-qjWv2yVhm13vP6iDLpSMwkCFS1LWpNdt1jXdWAjJxIJKjNcVJ_fzvfOs807OB2uWCplzb1yRZsb6SZx7PYjJlb9At_LVNl6r2fEdWjt6mLDkAkwvlAVu7P2K4TMtCCSnq_RtoHWDN3p6yRVXCbLvD3yUgTwndkzA3wAjfeDkHT-VdfHpMK8wesQ8FYEoTBp-lTavTMNKjk8x--_CO7lFJd7yHjoO3lL9jTyJg3cAsjzoeSygnxfWgnEmxSia8GbeMkZytCCGOh7zuOR04w86GMt8FhQLKxqwuvxbUa-7mQ"
// auth
// : 
// AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, appCheckServiceProvider: Provider, config: {…}, currentUser: UserImpl, …}
// displayName
// : 
// "Jhonatan Calle"
// email
// : 
// "kalle.3411@gmail.com"
// emailVerified
// : 
// true
// isAnonymous
// : 
// false
// metadata
// : 
// UserMetadata {createdAt: '1693184149472', lastLoginAt: '1693185566773', lastSignInTime: 'Mon, 28 Aug 2023 01:19:26 GMT', creationTime: 'Mon, 28 Aug 2023 00:55:49 GMT'}
// phoneNumber
// : 
// null
// photoURL
// : 
// "https://lh3.googleusercontent.com/a/AAcHTtfD_d5bMBRsMVKrJ3ZqdHBxUlLO0TVqC1nxdF2phnStElo=s96-c"
// proactiveRefresh
// : 
// ProactiveRefresh {user: UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
// providerData
// : 
// [{…}]
// providerId
// : 
// "firebase"
// reloadListener
// : 
// null
// reloadUserInfo
// : 
// {localId: 'uDEoVtC4vwgC5p0PvL347zVaQ6k1', email: 'kalle.3411@gmail.com', displayName: 'Jhonatan Calle', photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtfD_d5bMBRsMVKrJ3ZqdHBxUlLO0TVqC1nxdF2phnStElo=s96-c', emailVerified: true, …}
// stsTokenManager
// : 
// StsTokenManager {refreshToken: 'AMf-vBy1sBaMoAkEKygIQp0gpuwwd9L6OWsGFV1X997x5dpe1i…W7gDF33H3_4jeJPidac6uFaKiYPZ40mmMH-QExZg8kugBYW1Q', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2MGI5ZGUwODBmZmFmYm…Sia8GbeMkZytCCGOh7zuOR04w86GMt8FhQLKxqwuvxbUa-7mQ', expirationTime: 1693189215917}
// tenantId
// : 
// null
// uid
// : 
// "uDEoVtC4vwgC5p0PvL347zVaQ6k1"
// refreshToken
// : 
// (...)
// [[Prototype]]
// : 
// Object
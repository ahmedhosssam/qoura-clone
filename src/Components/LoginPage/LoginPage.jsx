import { auth, provider } from '../../firebase/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      localStorage.setItem('userPic', result.user.photoURL);
      localStorage.setItem('email', auth.currentUser.email);

      // navigate('/');
      location.reload();
    });
  };

  return (
    <div className="login-page">
      <h1>Sign in with Google</h1>

      <div onClick={signInWithGoogle} className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

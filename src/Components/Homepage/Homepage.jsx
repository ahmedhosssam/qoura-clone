import profile from '../../assets/profile.jpg';
import pen from '../../assets/pen.svg';
import upvote from '../../assets/upvote.svg';
import comment from '../../assets/comment.svg';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

let userProfilePic = localStorage.getItem('userPic');
const Homepage = ({ isAuth }) => {
  return (
    <div className="homepage-container">
      {isAuth ? <PostForm /> : ''}

      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
      <PostTemp
        src={profile}
        details="Programming is so easy!"
        postName="Ahmed Hossam"
        date="3 min"
      />
    </div>
  );
};

export default Homepage;

const PostForm = () => {
  const [postContent, setPostContent] = useState();
  const postsCollectionRef = collection(db, 'posts');
  let navigate = useNavigate();

  const sendPost = async () => {
    const currentTime = Date.now();
    const dateObj = new Date(currentTime);
    const dayOfWeek = dateObj.toLocaleString('en-US', { weekday: 'short' });
    const timeOfDay = dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    await addDoc(postsCollectionRef, {
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        photoURL: auth.currentUser.photoURL,
        time: `${dayOfWeek} ${timeOfDay}`,
      },
      postContent,
    });
    console.log(`${dayOfWeek} ${timeOfDay}`);
    navigate('/');
  };
  return (
    <div className="post-form-container">
      <img src={userProfilePic} />
      <div className="post-form">
        <textarea
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
          className="textarea"
          placeholder="Ask or share something ..."
        />
        <button onClick={sendPost}>
          <img src={pen} /> Post
        </button>
      </div>
    </div>
  );
};

const PostTemp = ({ src, details, postName, date }) => {
  // const [likes, setLikes] = useState(0);

  // const handleClick = () => {
  //   setLikes(likes + 1);
  // };

  return (
    <div className="post-temp-container">
      <div className="post-header">
        <img src={src} />

        <div className="post-info">
          <p className="post-name">{postName}</p>
          <p className="post-date">{date}</p>
        </div>
      </div>

      <p className="post-details">{details}</p>
      <div className="post-actions">
        <button>
          <img className="upvote" src={upvote} />
          <span>Upvote</span>
          {/* <span>{likes}</span> */}
        </button>
        <button>
          <img src={comment} />
        </button>
      </div>
    </div>
  );
};

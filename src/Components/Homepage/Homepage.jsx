import profile from '../../assets/profile.jpg';
import pen from '../../assets/pen.svg';
import upvote from '../../assets/upvote.svg';
import comment from '../../assets/comment.svg';
import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db, auth } from '../../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { onAuthStateChanged } from 'firebase/auth';

let userProfilePic = localStorage.getItem('userPic');

const Homepage = () => {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const postsCollectionRef = collection(db, 'posts');
  let isAuth = localStorage.getItem('isAuth');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

      setFetchedPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getPosts();
  }, []);

  return (
    <div className="homepage-container">
      {isAuth ? <PostForm /> : ''}

      {fetchedPosts.map((post) => {
        return (
          <PostTemp
            src={post.author.photoURL}
            postName={post.author.name}
            date={post.author.time}
            details={post.postContent}
            id={post.id}
            email={post.author.email}
          />
        );
      })}
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
        email: auth.currentUser.email,
      },
      postContent,
    });
    navigate('/');
    location.reload();
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

const PostTemp = ({ src, details, postName, date, id, email }) => {
  // const [likes, setLikes] = useState(0);

  // const handleClick = () => {
  //   setLikes(likes + 1);
  // };
  const [activeUser, setActiveUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setActiveUser(true);
    } else {
      setActiveUser(false);
    }
  });

  const docRef = doc(db, `posts/${id}`);
  const deletePost = async () => {
    await deleteDoc(docRef);
    location.reload();
  };

  return (
    <div className="post-temp-container" key={id}>
      <div className="post-header">
        <div className="header-right">
          <img src={src} />

          <div className="post-info">
            <p className="post-name">{postName}</p>
            <p className="post-date">{date}</p>
          </div>
        </div>

        {activeUser ? (
          auth.currentUser.email == email ? (
            <button className="header-left" onClick={deletePost}>
              ❌
            </button>
          ) : (
            ''
          )
        ) : (
          ''
        )}
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

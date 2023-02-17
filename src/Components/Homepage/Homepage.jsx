import profile from '../../assets/profile.jpg';
import pen from '../../assets/pen.svg';
import upvote from '../../assets/upvote.svg';
import comment from '../../assets/comment.svg';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <PostForm />
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
  return (
    <div className="post-form-container">
      <img src={profile} />
      <div className="post-form">
        <textarea
          className="testarea"
          placeholder="Ask or share something ..."
        />
        <button>
          <img src={pen} /> Post
        </button>
      </div>
    </div>
  );
};

const PostTemp = ({ src, details, postName, date }) => {
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
        </button>
        <button>
          <img src={comment} />
        </button>
      </div>
    </div>
  );
};

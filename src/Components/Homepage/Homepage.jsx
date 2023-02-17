import profile from '../../assets/profile.jpg';
import pen from '../../assets/pen.svg';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <PostForm />
    </div>
  );
};

export default Homepage;

const PostForm = () => {
  return (
    <div className="post-form-container">
      <img src={profile} />
      <div className="post-form">
        <input placeholder="Ask or share something ..." />
        <button>
          <img src={pen} /> Post
        </button>
      </div>
    </div>
  );
};

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
    <div className="post-form">
      <img src={profile} />
      <div>
        <input placeholder="What do you want to ask or share?" />
        <button>
          <img src={pen} /> Post
        </button>
      </div>
    </div>
  );
};

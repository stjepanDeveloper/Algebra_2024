import PropTypes from "prop-types";
export default function Comment(props) {
  return (
    <div className="comment">
      <Author author={props.author} />
      <p>{props.text}</p>
      <p>Author: {props.author.name}</p>
      <small>{formatDate(props.date)}</small>
    </div>
  );
}

function Author(props) {
  return <img id="avatar" src={props.author.url} alt={props.author.name}></img>;
}

//Function to format date
function formatDate(date) {
  return date?.toLocaleDateString("en-US");
}

// Validation of properties

Comment.propTypes = {
  text: PropTypes.string,
  date: PropTypes.any,
  author: PropTypes.object,
};

// Default properties

Comment.defaultProps = {
  text: "Unknown",
  date: new Date(),
  author: {
    name: "Unkown author",
    url: "https://placehold.com/100*100",
  },
};

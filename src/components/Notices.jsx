import "../assets/styles/Notices.css";

export default function Notices(props) {
  const category = props.category;
  const title = props.title;
  const date = props.date;
  const image = props.image;
  const description = props.description;

  return (
    <div className="notice">
      <p className="date">{date}</p>
      <h1 className="title">{title}</h1>
      <p className="category">{category}</p>
      <img src={image} alt="Image" />
      <p className="description">{description}</p>
      <a href="#" alt="Read more button" className="readMore">
        Read More
      </a>
    </div>
  );
}

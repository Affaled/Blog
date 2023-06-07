import "../assets/styles/ViewNotices.css";

export default function ViewNotices(props) {
  const category = props.category;
  const title = props.title;
  const date = props.date;
  const image = props.image;
  const description = props.description;

  return (
    <div className="notice">
      <p className="category">{category}</p>
      <h1 className="title">{title}</h1>
      <p className="date">{date}</p>
      <img src={image} alt="Image" />
      <p className="description">{description}</p>
      <a href="#" alt="Read more button" className="readMore">
        Read More
      </a>
    </div>
  );
}

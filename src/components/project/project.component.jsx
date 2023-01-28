import { useEffect, useState } from "react";
import "./project.styles.css";

const Project = ({ menuItem }) => {
  const { id, img, title, desc, category, url } = menuItem;

  const [readMore, setReadMore] = useState(false);
  const [isLongDesc, setisLongDesc] = useState(false);

  const arrCategories = ["react", "js", "html", "css"];

  useEffect(() => {
    if (desc.length < 122) {
      setisLongDesc(true);
    }
  }, []);

  let narrCategories = [];
  if (category === "javascript") {
    narrCategories = arrCategories.slice(1, arrCategories.length);
  } else {
    narrCategories = arrCategories.slice(
      0 + arrCategories.indexOf(category),
      arrCategories.length
    );
  }
  return (
    <article key={id} className="project-container">
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <div className="img-container">
          <img src={img} alt={title} className="photo" />
        </div>
      </a>
      <div className="item-info">
        <div className="header">
          <h4 className="title-card">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className="host-link"
            >
              {title}
            </a>
          </h4>
          <div className="category-list">
            {narrCategories.map((cat, index) => (
              <span key={index} className="category">
                {cat.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {isLongDesc ? (
          <p className="item-text">{desc}</p>
        ) : (
          <p className="item-text">
            {readMore ? desc : `${desc.substring(0, 122)}...`}
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "show less" : "read more"}
            </button>
          </p>
        )}
      </div>
    </article>
  );
};

export default Project;

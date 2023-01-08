import "./projectdummy.styles.css";

const Project = ({ menuItem }) => {
  const arrCategories = ["react", "js", "html", "css"];
  const { id, img, title, desc, category } = menuItem;
  let narrCategories = [];

  if (category === "javascript") {
    narrCategories = arrCategories.slice(1, arrCategories.length);
  } else {
    narrCategories = arrCategories.slice(
      0 + arrCategories.indexOf(category),
      arrCategories.length
    );
  }
  console.log(img);
  return (
    <article key={id} className="project-container">
      <div className="img-container">
        <img src={img} alt={title} className="photo" />
      </div>
      <div className="item-info">
        <div className="header">
          <h4 className="title-card">{title}</h4>
          <div className="category-list">
            {narrCategories.map((cat, index) => (
              <span key={index} className="category">
                {cat.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Project;

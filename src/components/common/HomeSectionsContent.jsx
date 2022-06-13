function HomeSectionsContent({ img, altText, heading, paragraph }) {
  return (
    <>
      <img src={img} alt={altText} />
      <div className="home-content__texts">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </>
  );
}

export default HomeSectionsContent;

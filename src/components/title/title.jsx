import "./title.styles.scss";

export const Title = ({title, subTitle}) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      {/* <h2>{subTitle}</h2> */}
    </div>
  );
}

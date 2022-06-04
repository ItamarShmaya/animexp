const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, right: "0", zIndex: "2" }}
      onClick={onClick}
    />
  );
};
export default NextArrow;

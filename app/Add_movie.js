const Button = ({ AddMovie, onClick }) => {
  return (
    <button onClick={onClick}>
      {AddMovie}
    </button>
  );
};

export default Button;

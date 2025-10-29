export default function Delete({ onClick }) {
  return (
    <div className="del-container">
      <button className="del" onClick={onClick}>
        X
      </button>
    </div>
  );
}

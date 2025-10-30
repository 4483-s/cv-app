export default function Delete({ onDelete }) {
  return (
    <div className="del-container">
      <button className="del" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

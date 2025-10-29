export default function LabelBox(p) {
  return (
    <label>
      <div>{p.title}</div>
      <input type="text" className="uni-name" value={p.value} />
    </label>
  );
}

import Delete from "./delete.jsx";
export default function Exp() {
  return (
    <section className="exp-section">
      <h2>Experience</h2>
      <ExpItem></ExpItem>
      <button>Add</button>
    </section>
  );
}
function ExpItem() {
  return (
    <div className="cards">
      <Delete></Delete>
      <div>
        <label>
          <div>{"Company: "}</div>
          <input type="text" className="uni-name" />
        </label>
        <label>
          <div>{"Title: "}</div>
          <input type="text" className="degree" />
        </label>
        <label>
          <div>{": "}</div>
          <input type="text" className="subject" />
        </label>
        <label>
          <div>{"from: "}</div>
          <input type="date" />
        </label>
        <label>
          <div>{"to: "}</div>
          <input type="date" />
        </label>
        <label>
          <div>{"Responsibilities: "}</div>
          <textarea></textarea>
        </label>
      </div>
    </div>
  );
}

import Delete from "./delete";
export default function EduItem() {
  return (
    <div className="cards">
      <Delete></Delete>
      <div>
        <label>
          <div> {"University: "}</div>
          <input type="text" />
        </label>
        <label>
          <div> {"Degree: "}</div>
          <input type="text" />
        </label>
        <label>
          <div>{"Subject: "}</div>
          <input type="text" />
        </label>
      </div>
    </div>
  );
}

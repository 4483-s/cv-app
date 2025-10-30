import Delete from "./delete";
export default function Edu({ onAdd, info, onChange, onDelete }) {
  return (
    <section className="edu-section">
      <h2>Education</h2>
      {info.map((item) => (
        <EduItem
          key={item.id}
          id={item.id}
          university={item.university}
          degree={item.degree}
          subject={item.subject}
          onChange={onChange}
          onDelete={onDelete}
        ></EduItem>
      ))}
      <button onClick={onAdd}>Add</button>
    </section>
  );
}
function EduItem({ id, university, degree, subject, onChange, onDelete }) {
  console.log(onChange);
  return (
    <div className="cards">
      <Delete onDelete={() => onDelete(id, "edu")}></Delete>
      <div>
        <label>
          <div> {"University: "}</div>
          <input
            type="text"
            value={university}
            onChange={onChange}
            data-id={id}
            data-type="university"
          />
        </label>
        <label>
          <div> {"Degree: "}</div>
          <input
            type="text"
            value={degree}
            onChange={onChange}
            data-id={id}
            data-type="degree"
          />
        </label>
        <label>
          <div>{"Subject: "}</div>
          <input
            type="text"
            value={subject}
            onChange={onChange}
            data-id={id}
            data-type="subject"
          />
        </label>
      </div>
    </div>
  );
}

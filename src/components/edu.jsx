import Delete from "./delete";
export default function EduItem({
  id,
  university,
  degree,
  subject,
  onChange,
  onDelete,
}) {
  return (
    <div className="cards">
      <Delete onDelete={() => onDelete("edu", id)}></Delete>
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

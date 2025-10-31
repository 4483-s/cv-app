import Delete from "./delete";
export default function EduItem({
  id,
  university,
  degree,
  subject,
  dateStart,
  dateEnd,
  onChange,
  onDelete,
}) {
  return (
    <div className="cards">
      <Delete onDelete={() => onDelete(id)}></Delete>
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
        <label>
          <div>{"From: "}</div>
          <input
            type="date"
            value={dateStart}
            onChange={onChange}
            data-id={id}
            data-type="dateStart"
          />
        </label>
        <label>
          <div>{"To: "}</div>
          <input
            type="date"
            value={dateEnd}
            onChange={onChange}
            data-id={id}
            data-type="dateEnd"
          />
        </label>
      </div>
    </div>
  );
}

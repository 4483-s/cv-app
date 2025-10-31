import Delete from "./delete.jsx";
export default function ExpItem({
  id,
  company,
  res,
  title,
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
          <div> {"Company: "}</div>
          <input
            type="text"
            value={company}
            onChange={onChange}
            data-id={id}
            data-type="company"
          />
        </label>
        <label>
          <div> {"Title: "}</div>
          <input
            type="text"
            value={title}
            onChange={onChange}
            data-id={id}
            data-type="title"
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
        <label>
          <div> {"Responsibilities: "}</div>
          <textarea
            value={res}
            onChange={onChange}
            data-id={id}
            data-type="res"
          ></textarea>
        </label>
      </div>
    </div>
  );
}

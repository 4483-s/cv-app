export default function ExpCard({ items }) {
  return (
    <div>
      {items.map((v) => (
        <div className="preview-card" key={v.id}>
          <p>
            <b>Company: </b>
            {v.company}
          </p>
          <p>
            <b>Title: </b>
            {v.title}
          </p>
          <p>
            <b>Responsibilities: </b>
            {v.res}
          </p>
          <p>
            <b>From </b>
            {v.dateStart || "-"} <b>to </b>
            {v.dateEnd || "present"}
          </p>
        </div>
      ))}
    </div>
  );
}

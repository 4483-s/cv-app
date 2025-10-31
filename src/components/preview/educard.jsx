export default function EduCard({ items }) {
  return (
    <div>
      {items.map((v) => (
        <div className="preview-card" key={v.id}>
          <p>
            <b>University: </b>
            {v.university}
          </p>
          <p>
            <b>Degree: </b>
            {v.degree}
          </p>
          <p>
            <b>Subject: </b>
            {v.subject}
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

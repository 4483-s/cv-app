export default function Pinfo({ info, onChange }) {
  return (
    <section className="personal-info">
      <h2>Personal information</h2>
      <label>
        <div> {"Name: "}</div>
        <input type="text" onChange={onChange} value={info.name} name="name" />
      </label>
      <label>
        <div> {"Email: "}</div>
        <input
          type="email"
          onChange={onChange}
          value={info.email}
          name="email"
        />
      </label>
      <label>
        <div>{"Phone: "}</div>
        <input
          type="text"
          onChange={onChange}
          value={info.phone}
          name="phone"
        />
      </label>
    </section>
  );
}

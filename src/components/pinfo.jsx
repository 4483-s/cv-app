export default function Pinfo(p) {
  console.log(p);
  return (
    <section className="personal-info">
      <h2>Personal information</h2>
      <label>
        <div> {"First Name: "}</div>
        <input
          type="text"
          onChange={p.personalInfo.onChange}
          value={p.firstName}
          name="firstName"
        />
      </label>
      <label>
        <div> {"Last Name: "}</div>
        <input
          type="text"
          onChange={p.personalInfo.onChange}
          // value={p.personalInfo.lastName}
          value={undefined}
          name="lastName"
        />
      </label>
      <label>
        <div> {"Email: "}</div>
        <input
          type="email"
          onChange={p.personalInfo.onChange}
          value={p.email}
          name="email"
        />
      </label>
      <label>
        <div>{"Phone: "}</div>
        <input
          type="text"
          onChange={p.personalInfo.onChange}
          value={p.phone}
          name="phone"
        />
      </label>
    </section>
  );
}

import { useState } from "react";
import Pinfo from "./pinfo";
import EduItem from "./edu";
import Exp from "./exp";
import Delete from "./delete";
class EduObj {
  university = "";
  degree = "";
  subject = "";
  id = crypto.randomUUID();
}
class ExpObj {
  company = "";
  title = "";
  responsibilities = "";
  id = crypto.randomUUID();
}
//
//
//
//
//
//
export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [eduItems, setEduItems] = useState([new EduObj()]);
  const [expItems, setExpItems] = useState([new ExpObj()]);
  function handlePinfoChange(e) {
    console.log(e.target);
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  }
  function handleAdd(target) {
    const newItems = [];
    for (const i of target) {
      newItems.push({ ...i });
    }
    newItems.push(target === eduItems ? new EduObj() : new ExpObj());
    if (target === eduItems) setEduItems(newItems);
    else setExpItems(newItems);
  }
  function handleOtherInfoChange(type, e) {
    const t = type === "edu" ? eduItems : expItems;
    const i = t.findIndex((v) => v.id === e.target.dataset.id);
    t[i][e.target.dataset.type] = e.target.value;
    if (type === "edu") setEduItems([...t]);
    else setExpItems(setExpItems([...t]));
  }
  function handleDelete(type, id) {
    const t = type === "edu" ? eduItems : expItems;
    const i = t.findIndex((v) => v.id === id);
    if (type === "edu") setEduItems(t.toSpliced(i, 1));
    else setExpItems(setExpItems(t.toSpliced(i, 1)));
  }

  return (
    <div className="container">
      <nav>
        <h1>CV</h1>
        <div>
          <button>Print</button>
          <button>Input</button>
          <button>Preview</button>
        </div>
      </nav>
      <main>
        <div className="left">
          <Pinfo info={personalInfo} onChange={handlePinfoChange}></Pinfo>
          <section className="edu-section">
            <h2>Education</h2>
            {eduItems.map((item) => (
              <EduItem
                key={item.id}
                id={item.id}
                university={item.university}
                degree={item.degree}
                subject={item.subject}
                onChange={(e) => handleOtherInfoChange("edu", e)}
                onDelete={handleDelete}
              ></EduItem>
            ))}
            <button onClick={() => handleAdd(eduItems)}>Add</button>
          </section>
          <Exp></Exp>
        </div>
        <div className="right">
          <h1>Personal Information</h1>
          <hr />
          <p>
            <b>Name: </b>
            {personalInfo.name}
          </p>
          {personalInfo.email ? (
            <p>
              <b>Email: </b> {personalInfo.email}
            </p>
          ) : (
            ""
          )}
          {personalInfo.phone ? (
            <p>
              <b>Phone: </b>
              {personalInfo.phone}
            </p>
          ) : (
            ""
          )}
          {eduItems.length ? (
            <>
              <hr />
              <h2>Educational experience</h2>
              {eduItems.map((v) => (
                <div>
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
                </div>
              ))}
            </>
          ) : (
            ""
          )}

          <hr />
          {expItems.length ? <h2>Working experience</h2> : ""}
        </div>
      </main>
    </div>
  );
}

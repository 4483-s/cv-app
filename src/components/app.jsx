import { useState } from "react";
import Pinfo from "./pinfo";
import EduItem from "./edu";
import ExpItem from "./exp";
import EduCard from "./preview/educard";
import ExpCard from "./preview/expcard";
class EduObj {
  university = "";
  degree = "";
  subject = "";
  dateStart = "";
  dateEnd = "";
  id = crypto.randomUUID();
}
class ExpObj {
  company = "";
  title = "";
  res = "";
  id = crypto.randomUUID();
}
//
//
//
//
//
//
export default function App() {
  const [showPreview, setShowPreview] = useState(true);
  const [showInput, setShowInput] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [eduItems, setEduItems] = useState([new EduObj()]);
  const [expItems, setExpItems] = useState([new ExpObj()]);
  //
  function handlePinfoChange(e) {
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
    else setExpItems([...t]);
  }
  function handleDelete(type, id) {
    const t = type === "edu" ? eduItems : expItems;
    const i = t.findIndex((v) => v.id === id);
    if (type === "edu") setEduItems(t.toSpliced(i, 1));
    else setExpItems(t.toSpliced(i, 1));
  }
  function leftEl() {
    return (
      <div className="left">
        {/* pinfo */}
        <Pinfo info={personalInfo} onChange={handlePinfoChange}></Pinfo>
        {/* pinfo */}
        {/* edu */}
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
              onDelete={(id) => handleDelete("edu", id)}
            ></EduItem>
          ))}
          <button onClick={() => handleAdd(eduItems)}>Add</button>
        </section>
        {/* edu */}
        <section className="exp-section">
          <h2>Experience</h2>
          {expItems.map((item) => (
            <ExpItem
              key={item.id}
              id={item.id}
              company={item.company}
              title={item.title}
              onChange={(e) => handleOtherInfoChange("exp", e)}
              onDelete={(id) => handleDelete("exp", id)}
            ></ExpItem>
          ))}
          <button onClick={() => handleAdd(expItems)}>Add</button>
        </section>
      </div>
    );
  }
  function rightEl() {
    return (
      <div className="right">
        <div>
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
          {/* {personalInfo.phone ? ( */}
          {/*   <p> */}
          {/*     <b>Phone: </b> */}
          {/*     {personalInfo.phone} */}
          {/*   </p> */}
          {/* ) : ( */}
          {/*   "" */}
          {/* )} */}
          {personalInfo.phone && (
            <p>
              <b>Phone: </b>
              {personalInfo.phone}
            </p>
          )}
        </div>
        {/* 
          pinfoend 
          */}
        {eduItems.length ? (
          <>
            <hr />
            <h2>Educational experience</h2>
            <EduCard items={eduItems}></EduCard>
          </>
        ) : (
          ""
        )}
        {expItems.length ? (
          <>
            <h2>Working experience</h2>
            <ExpCard items={expItems}></ExpCard>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <nav>
        <h1>Curriculum Vitae</h1>
        <div>
          <button onClick={() => window.print()}>Print</button>
          <button onClick={() => setShowInput(!showInput)}>Input</button>
          <button onClick={() => setShowPreview(!showPreview)}>Preview</button>
        </div>
      </nav>
      <main>
        {showInput ? leftEl() : ""}
        {/*

        right 

        */}

        {showPreview ? rightEl() : ""}
      </main>
    </div>
  );
}

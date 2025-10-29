import { useState } from "react";
import Left from "./left.jsx";
import Right from "./right/right.jsx";
import Bar from "./bar.jsx";
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
export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [eduItems, setEduItems] = useState([new EduObj()]);
  const [expItems, setExpItems] = useState([new ExpObj()]);
  function handlePinfoChange(e) {
    console.log("hi");
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  }
  return (
    <div className="container">
      <Bar></Bar>
      <main>
        <Left
          personalInfoProps={{ personalInfo, onChange: handlePinfoChange }}
          eduItems={eduItems}
          expItems={expItems}
        ></Left>
        <Right
          personalInfo={personalInfo}
          eduItems={eduItems}
          expItems={expItems}
        ></Right>
      </main>
    </div>
  );
}

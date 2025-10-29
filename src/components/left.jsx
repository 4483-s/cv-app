import Pinfo from "./pinfo";
import Edu from "./edu";
import Exp from "./exp";
export default function Left({ pinfoProps, eduProps, expProps }) {
  return (
    <div className="left half">
      <Pinfo personalInfo={pinfoProps}></Pinfo>
      <Edu></Edu>
      <Exp></Exp>
    </div>
  );
}

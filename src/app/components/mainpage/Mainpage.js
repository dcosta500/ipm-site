import MembersSection from "./sections/MembersSection";
import FilesSection from "./sections/FilesSection";
import "./Mainpage.css";

function Mainpage() {
  return (
    <div>
      <MembersSection />
      <FilesSection />
    </div>
  );
}

export default Mainpage;

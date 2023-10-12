import MembersSection from "./sections/MembersSection";
import FilesSection from "./sections/FilesSection";
import TitleSection from "./sections/TitleSection";
import "./Mainpage.css";

function Mainpage() {
  return (
    <div>
      <TitleSection />
      <MembersSection />
    </div>
  );
}

export default Mainpage;

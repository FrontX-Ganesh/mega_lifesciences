import Categories from "./_components/Categories";
import Experts from "./_components/Experts";
import HomePageHeading from "./_components/HomePageHeading";
import PersonalizeCare from "./_components/PersonalizeCare";
import Program from "./_components/Program";
import ProgramInfo from "./_components/ProgramInfo";
import Register from "./_components/Register";
import Resources from "./_components/Resources";
import Stories from "./_components/Stories";
import YourJourney from "./_components/YourJourney";

export default function Home() {
  return (
    <>
      <HomePageHeading />
      <Categories />
      <YourJourney />
      <Resources />
      <Experts />
      <ProgramInfo />
      <Program />
      <PersonalizeCare />
      <Stories />
      <Register />
    </>
  );
}

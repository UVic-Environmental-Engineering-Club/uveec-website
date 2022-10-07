import "../../styles/globals.css";
import AwardsContainer from "../common/awards/container/AwardsContainer";
import Footer from "../common/components/footer/Footer";
import Header from "../common/components/header/Header";
import GoalContainer from "../common/goal/container/GoalContainer";
import MainContainer from "../common/main/container/MainContainer";
import TeamContainer from "../common/team/container/TeamContainer";

function App() {
  return (
    <div>
      <Header/>
      <MainContainer />
      <GoalContainer />
      <TeamContainer />
      <AwardsContainer />
      <Footer />
    </div>
  );
}

export default App;

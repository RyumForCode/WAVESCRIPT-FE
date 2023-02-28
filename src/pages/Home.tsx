import { WhiteModeProvider } from '../components/context/WhiteModeContext';
import HeaderTitle from '../components/HeaderTitle';
import HomeContents from '../components/HomeContents';


const Home = () => {
    
    return (
      <WhiteModeProvider>
        <HeaderTitle />
        <HomeContents />
      </WhiteModeProvider>
    )
}

export default Home;


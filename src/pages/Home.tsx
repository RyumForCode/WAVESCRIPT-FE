import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import HomeContents from '../components/HomeContents';
import MainLogin from '../components/MainLogin';
import MainLogout from '../components/MainLogout';
import TopNavBar from '../components/TopNavBar';
import Wrapper from '../components/Wrapper';
import useIsLogin from '../hooks/useIsLogin';

const Home = () => {

  const [isLogin] = useIsLogin();

  return (
    <Wrapper>
      <TopNavBar isLogin = {isLogin}/>
      <HeaderTitle />
      <HomeContents />
      <Footer />
    </Wrapper>
  )
}

export default Home;
import './App.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'

import pica from './images/bg1.jpeg';


function App() {
  const layoutStyle = {
    color: 'e2e2e2',
  };

  return (
    <>
      <Header
        title='This is title'
        descr='This is Description!'
      />
      <Layout
        urlBg={pica}
        title='This is title'
        descr='This is Description!'
      />
      <Layout
        colorBg={layoutStyle}
        title='This is title'
        descr='This is Description!'
      />
      <Layout
        urlBg={pica}
        title='This is title'
        descr='This is Description!'
      />

      <Footer/>
      
    </>
  );
}

export default App;

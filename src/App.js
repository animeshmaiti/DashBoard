import Follower from './components/Follower';
import Header from './components/Header';
import Overview from './components/Overview';

function App() {
  return (
    <>
      <section className='p-8 dark:bg-slate-900 h-full lg:h-screen'>
        <div 
          className=' bg-slate-100 dark:bg-slate-800 h-52 w-full absolute top-0 left-0 rounded-b-3xl'
          style={{zIndex: '-1'}}
        ></div>
        <Header/>
        <Follower/>
        <Overview/>
      </section>
    </>
  );
}

export default App;

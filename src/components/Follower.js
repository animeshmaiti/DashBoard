import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
// import up from '../images/icon-up.svg'
// import down from '../images/icon-down.svg'
export default function Follower() {
  // const [followerCount, setFollowerCount] = useState(null);

  // useEffect(() => {
  //   const fetchFollowerCount = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://graph.facebook.com/v17.0/me?fields=name&access_token=${token}`
  //       );
  //       setFollowerCount(response.data.name);
  //     } catch (error) {
  //       console.error('Error fetching follower count:', error);
  //     }
  //   };

  //   fetchFollowerCount();
  // }, []);

  return (
    <>
      <section className='relative z-10 max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-600'>
          <a href="https://www.facebook.com/animesh.maiti.566/" target="blank" className='flex items-center justify-center text-center'>
            <img src={facebook} alt='facebook' className='mr-2' width={45} />
          </a>
          <h2 className='text-5xl font-bold text-center my-5'>
            <span className='text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'>
              @animesh.maiti.566
            </span>
          </h2>
          {/* -------- */}
        </article>
        <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-blue-600'>
          <a href="https://twitter.com/AnimeshMaiti7" target="blank" className='flex items-center justify-center text-center'>
            <img src={twitter} alt='twitter' className='mr-2' width={45} />
          </a>

          {/* work later */}
          <h2 className='text-5xl font-bold text-center my-5'>
            <span className='text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'>
              @animeshmaiti7
            </span>
          </h2>
          {/* -------- */}
        </article>
        <article className="bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 relative">
          <div className="instagram h-2 w-full rounded-tl-lg rounded-tr-lg absolute top-0 left-0"></div>

          <a href="https://www.instagram.com/maiti_animesh/" target="blank" className='flex items-center justify-center text-center'>
            <img src={instagram} alt='insta' className='mr-2' width={45} />
          </a>

          {/* work later */}
          <h2 className='text-5xl font-bold text-center my-5'>
            <span className='text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'>
              @maiti_animesh
            </span>
          </h2>
          {/* -------- */}
        </article>
        <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded-lg shadow shadow-slate-50 dark:shadow-slate-700 border-t-8 border-red-700'>

          <a href="https://youtube.com/@animeshmaiti3301" target="blank" className='flex items-center justify-center text-center'>
            <img src={youtube} alt='yt' className='mr-2' width={45} />
          </a>
          <h2 className='text-5xl font-bold text-center my-5'>
            <span className='text-sm block text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest'>
            @animeshmaiti3301
            </span>
          </h2>
          {/* -------- */}
        </article>
      </section>
    </>
  )
}

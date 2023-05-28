import {useState} from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    const body = document.querySelector('body');

    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    setDarkMode(!darkMode);
  }

  return (
    <>
      <header className=''>
        <div>
          <h1 className=''>

          </h1>
          <p className=''>

          </p>
        </div>
        
        {/* Toggle */}
        <div className=''>
          <label
            htmlFor='checkbox'
            className=''
          ></label>
          <input
            type='checkbox'
            id='checkbox'
            className='checkbox'
            onChange={toggleTheme}
            checked={!darkMode}
          />
          <label>
            <div className='ball'/>
          </label>
        </div>
      </header>
    </>
  )
}

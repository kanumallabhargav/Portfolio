import { IconUpArrow, IconDownArrow } from '../assets/static/Icons'
import Logo from '../assets/static/logo.png';

export default function Header() {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return <div className="bg-red-400/50 text-zinc-300 font-semibold
                    mx-12 mt-3 px-10 h-8
                    rounded-full
                    fixed top-0 inset-x-0 z-50
                    flex items-center text-xl justify-between">
            <span className='mt-1'>
              <img src={Logo} alt="Company Logo" width="190"/>
            </span>
            <div className='pt-1.5'>
                <button className='mr-1.5
                        hover:bg-red-400/30 active:bg-red-400/20
                        rounded-full p-0.5'
                        onClick={scrollToTop}
                        >
                    <IconUpArrow />
                </button>
                <button className='hover:bg-red-400/30 active:bg-red-400/20
                        rounded-full p-0.5'
                        onClick={scrollToBottom}
                        >
                    <IconDownArrow />
                </button>
            </div>
        </div>
}
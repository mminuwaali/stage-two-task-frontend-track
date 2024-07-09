import { Link } from 'react-router-dom'
import { url } from '../routes/routes'
import { logo } from '../constants/media'

export default () => {
    return <header className='w-full top-0 left-0 fixed z-50 flex items-center justify-between p-4 px-[5%] backdrop-blur-sm pb-1'>
        <Link to={url('index')} className=''><img src={logo} alt='' className='h-10' /></Link>

        <nav className='flex items-center justify-center gap-4 md:gap-8 text-white capitalize font-semibold text-xs md:text-sm z-50'>
            <Link className='drop-shadow-xl' to={url('index')}>home</Link>
            <Link className='drop-shadow-xl' to={url('team')}>team</Link>
            <Link className='drop-shadow-xl' to={url('contact')}>contact us</Link>
        </nav>
    </header>
}

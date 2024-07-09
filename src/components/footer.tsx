import { socialLinks } from "../constants/data"

export default () => {
    return <footer className='w-full flex flex-wrap items-center justify-center text-sm p-6 gap-4 text-white font-semibold'>
        <span className="capitalize">&copy; cyclexafrica</span>
        <span className="font-semibold">Powered by The Hndwok Global Limited</span>
        
        <nav className="flex items-center justify-center gap-4">
            {socialLinks.map(item => <a href={item.href} key={item.icon} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex-none bg-[#78B099] flex items-center justify-center">
                <img src={item.icon} alt="" loading="lazy" className="w-1/2 aspect-square object-contain grayscale" />
            </a>)}
        </nav>
    </footer>
}

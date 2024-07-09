import { icon } from '../constants/media'

export default () => {
    return <div className='w-full h-full flex items-center justify-center'>
        <div className='w-32 aspect-square flex items-center justify-center p-2 rounded-full shadow-2xl md:animate-pulse animate-bounce'>
            <img src={icon} alt='' className='' />
        </div>
    </div>
}
import Status from './status';
import './header.css';

export default function Header() {
    return (
        <div className='header  h-[35px] pt-[4px] flex items-center justify-between'>
            Header
            <Status />
        </div>
    );
}

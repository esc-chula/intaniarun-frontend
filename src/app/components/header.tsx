import Status from './status';
import './header.css';
import Image from 'next/image';

export default function Header() {
    return (
        <div className='flex flex-col items-center  justify-center header  h-[90px] '>
            <Image src='/intania-run-logo.png' alt="intania-run-logo" width={113} height={56} />
            {/* <Status /> */}
        </div>
    );
}

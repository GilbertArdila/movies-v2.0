'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


const NavbarItem = ({ param, title }) => {

    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
   
    return (
        <div className='flex items-center'>
            <Link href={`/?genre=${param}`} className={genre && genre === param ? ' underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg mx-4 lg:mx-6' : 'hover:text-amber-600'}>

                <p className='  my-2 text-sm'>{title}</p>
            </Link>

        </div>
    )
}

export default NavbarItem;
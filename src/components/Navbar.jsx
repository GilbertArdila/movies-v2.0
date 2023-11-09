import NavbarItem from './NavbarItem';
import { Suspense } from 'react';


function NavbarItemFallback(){
    return <>placeholder</>
}
const Navbar = () => {


    return (
        <nav className='flex  justify-around min-w-full h-12 dark:bg-gray-500 bg-gray-300'>
            <ul className='flex self-center justify-between'>
                <li className="mr-4">
                    <Suspense fallback={<NavbarItemFallback/>}>
                    <NavbarItem title={'Trending'}
                        param='fetchTrending'

                    /></Suspense>

                </li>
                <li>
                <Suspense fallback={<NavbarItemFallback/>}>
                    <NavbarItem title={'Top Rated'}
                        param='fetchTopRated'

                    /></Suspense>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
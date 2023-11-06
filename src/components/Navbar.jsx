import NavbarItem from "./NavbarItem";




const Navbar = () => {
    return (
        <nav className='flex  justify-around min-w-full h-12 dark:bg-gray-500 bg-gray-300'>
            <ul className='flex self-center justify-between'>
                <li className="mr-4">
                    <NavbarItem title={'Trending'}
                        param='fetchTrending'

                    />

                </li>
                <li>
                    <NavbarItem title={'Top Rated'}
                        param='fetchTopRated'

                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
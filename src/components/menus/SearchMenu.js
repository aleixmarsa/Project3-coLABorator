import { SearchIcon} from "@heroicons/react/solid";

const SearchMenu = (props) => {
    const {location, search, handleSearch} = props
    return (
        <>
          {/* Search section */}
          {location.pathname === "/" ? (
            <div className="flex-1 flex justify-center">
              <div className="w-1/2 px-2 ">
                <label htmlFor="search" className="sr-only">
                  Search projects
                </label>
                <div className="relative text-lime-200 focus-within:text-gray-400">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-lime-400 bg-opacity-25 text-lime-100 placeholder-lime-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                    placeholder="Search projects"
                    type="search"
                    value={search}
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          </>
    )
}

export default SearchMenu;
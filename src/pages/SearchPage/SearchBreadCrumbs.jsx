import { HomeIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

function SearchBreadCrumbs({ isLoading, locationParts }) {
  return (
    <nav
      className="mb-2 flex border-b border-gray-200 bg-white sm:mb-10"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="section-container mx-auto flex w-full flex-wrap gap-2 px-4 py-2 sm:gap-0 sm:space-x-4 sm:px-6 sm:py-0 lg:px-8 "
      >
        <li className="flex">
          <div className="flex items-center">
            <NavLink to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </NavLink>
          </div>
        </li>
        {isLoading && (
          <li className="flex">
            <div className="flex items-center">
              <svg
                className="hidden h-full w-6 flex-shrink-0 text-gray-200 sm:block"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <div className="ml-0 text-xs font-medium text-primaryRed hover:text-gray-700 sm:ml-4 sm:text-sm ">
                Loading...
              </div>
            </div>
          </li>
        )}
        {!isLoading &&
          locationParts.map((page, index) => (
            <li key={index} className="flex-0 flex">
              <div className="flex items-center">
                <svg
                  className="hidden h-full w-6 flex-shrink-0 text-gray-200 sm:block"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <NavLink
                  to={page.href}
                  className={`ml-0 whitespace-nowrap text-xs font-medium capitalize hover:text-gray-700 sm:ml-4 sm:text-sm ${
                    index === locationParts.length - 1
                      ? "font-semibold text-secondaryOrange hover:text-primaryRed "
                      : "text-gray-500"
                  }`}
                  aria-current={
                    index === locationParts.length - 1 ? "page" : undefined
                  }
                >
                  {page}
                </NavLink>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}

export default SearchBreadCrumbs;

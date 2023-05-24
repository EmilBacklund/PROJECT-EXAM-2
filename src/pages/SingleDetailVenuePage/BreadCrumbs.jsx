import { HomeIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';

export default function BreadCrumbs({ venueData, isLoading }) {
  let pages = [];
  if (venueData) {
    if (venueData.location.country) {
      pages.push({
        name: venueData.location.country,
        href: '#', // Update href as needed
        current: false,
      });
    }

    if (venueData.location.state) {
      pages.push({
        name: venueData.location.state,
        href: '#', // Update href as needed
        current: false,
      });
    }

    if (venueData.location.city) {
      pages.push({
        name: venueData.location.city,
        href: '#', // Update href as needed
        current: false,
      });
    }

    pages.push({
      name: venueData.title,
      href: '#', // Update href as needed
      current: true,
    });
  }

  return (
    <nav
      className="flex border-b border-gray-200 bg-white mb-2 sm:mb-10"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="mx-auto flex w-full section-container gap-2 sm:gap-0 sm:space-x-4 px-4 sm:px-6 lg:px-8 py-2 sm:py-0 flex-wrap "
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
                className="h-full w-6 flex-shrink-0 text-gray-200 hidden sm:block"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <div className="ml-0 sm:ml-4 text-xs sm:text-sm text-primaryRed font-medium hover:text-gray-700 ">
                Loading...
              </div>
            </div>
          </li>
        )}
        {!isLoading &&
          pages.map((page) => (
            <li key={page.name} className="flex flex-0">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-200 hidden sm:block"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <NavLink
                  to={page.href}
                  className={`ml-0 sm:ml-4 text-xs sm:text-sm font-medium hover:text-gray-700 whitespace-nowrap ${
                    page.current
                      ? 'text-secondaryOrange font-semibold hover:text-primaryRed '
                      : 'text-gray-500'
                  }`}
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </NavLink>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}

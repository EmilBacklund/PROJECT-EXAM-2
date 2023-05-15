import { CheckIcon } from '@heroicons/react/20/solid';
import { useSelector, useDispatch } from 'react-redux';
import { setStage } from '../../store/modules/displayedVenueStageSlice';

export default function RegisterProgression() {
  const currentStage = useSelector(
    (state) => state.displayedVenueStage.stage
  );
  const stageData = useSelector(
    (state) => state.displayedVenueStage.stageData
  );

  const dispatch = useDispatch();

  console.log(stageData);

  let stages = [
    {
      stage: 1,
      href: '/registerVenue/essential-information',
    },
    {
      stage: 2,
      href: '/registerVenue/title-and-description',
    },
    {
      stage: 3,
      href: '/registerVenue/location',
    },
    {
      stage: 4,
      href: '/registerVenue/amenities',
    },
    {
      stage: 5,
      href: '/registerVenue/pricing',
    },
    {
      stage: 6,
      href: '/registerVenue/images',
    },
  ];

  stages = stages.map((stage) => {
    if (stage.stage < currentStage) {
      return { ...stage, status: 'complete' };
    } else if (stage.stage === currentStage) {
      return { ...stage, status: 'current' };
    } else {
      return { ...stage, status: 'upcoming' };
    }
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <nav aria-label='Progress'>
      <ol
        role='list'
        className='flex items-center sm:flex-col justify-center sm:justify-between sm:h-full my-6 sm:gap-10'
      >
        {stages.map((stage, stageIdx) => (
          <li
            key={stage.stage}
            onClick={() => dispatch(setStage(stageIdx + 1))}
            className={classNames(
              stageIdx !== stages.length - 1
                ? 'pr-4 sm:pr-0 smallScreen:pr-8'
                : '',
              'relative'
            )}
          >
            {stage.status === 'complete' ? (
              <>
                <div
                  className='absolute inset-0 sm:inset-auto sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 flex items-center sm:justify-center'
                  aria-hidden='true'
                >
                  <div
                    className={`h-0.5 w-full bg-[#0091AE] sm:w-0.5 sm:-z-10 ${
                      stageIdx === 0
                        ? 'sm:h-auto'
                        : 'sm:h-[100px]'
                    }`}
                  />
                </div>
                <a
                  href={stage.href}
                  className='relative cursor-pointer flex h-8 w-8 items-center justify-center rounded-full bg-[#0091AE] hover:bg-[#34A9C0] sm:z-10'
                >
                  <CheckIcon
                    className='h-5 w-5 text-white '
                    aria-hidden='true'
                  />
                  <span className='sr-only'>
                    {stage.stage}
                  </span>
                </a>
              </>
            ) : stage.status === 'current' ? (
              <>
                <div
                  className='absolute inset-0 flex items-center sm:inset-auto sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2'
                  aria-hidden='true'
                >
                  <div
                    className={`h-0.5 w-full bg-gray-200 sm:h-[100px] sm:w-0.5 sm:-z-10 ${
                      stageIdx === 0
                        ? 'sm:h-auto'
                        : 'sm:h-[100px]'
                    }`}
                  />
                </div>
                <a
                  href={stage.href}
                  className='relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0091AE] bg-white'
                  aria-current='stage'
                >
                  <span
                    className='h-2.5 w-2.5 rounded-full bg-[#0091AE]'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>
                    {stage.stage}
                  </span>
                </a>
              </>
            ) : (
              <>
                <div
                  className='absolute inset-0 flex items-center sm:inset-auto sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:-z-10'
                  aria-hidden='true'
                >
                  <div
                    className={`h-0.5 w-full bg-gray-200 sm:h-[100px] sm:w-0.5 sm:-z-10 ${
                      stageIdx === 0
                        ? 'sm:h-auto'
                        : 'sm:h-[100px]'
                    }`}
                  />
                </div>
                <a
                  href={stage.href}
                  className='group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400'
                >
                  <span
                    className='h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>
                    {stage.stage}
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

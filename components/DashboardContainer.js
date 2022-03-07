import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDarkMode } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const sidebar = [
  {
    id: uuidv4(),
    url: '/',
    title: 'Dashboard',
  },
  {
    id: uuidv4(),
    url: '/post',
    title: 'Posts',
  },
  {
    id: uuidv4(),
    url: '/media-library',
    title: 'Media Library',
  },
];
const navbar = [
  {
    id: uuidv4(),
    url: '/profile',
    title: 'Profile',
  },
  {
    id: uuidv4(),
    url: '/settings',
    title: 'Settings',
  },
  {
    id: uuidv4(),
    url: '/logout',
    title: 'Logout',
  },
];

export default function DashboardContainer({ children }) {
  const router = useRouter();
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <>
      {/* navbar */}
      <div className='navbar border-b-2 bg-base-100'>
        <div className='flex-1'>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-ghost btn-square drawer-button lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-6 w-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
          <a className='btn btn-ghost text-xl normal-case'>Admin</a>
        </div>
        <div className='flex-none gap-2'>
          <button className='btn btn-ghost' onClick={toggle}>
            {isDarkMode ? (
              <MdDarkMode className='text-2xl' />
            ) : (
              <MdLightMode className='text-2xl' />
            )}
          </button>
          <div className='dropdown-end dropdown'>
            <label tabIndex='0' className='avatar btn btn-circle btn-ghost'>
              <div className='w-10 rounded-full'>
                <img src='https://api.lorem.space/image/face?hash=33791' />
              </div>
            </label>
            <ul
              tabIndex='0'
              className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
            >
              {navbar.map((item) => (
                <li key={item.id}>
                  <Link href={item.url}>
                    <a className={router.pathname == item.url ? 'active' : ''}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div
        className='drawer drawer-mobile w-full'
        style={{ height: 'calc(100vh - 70px)' }}
      >
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
          {children}
        </div>
        <div className='drawer-side border-r-2'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu w-72 overflow-y-auto bg-base-100 p-4 text-base-content'>
            {sidebar.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>
                  <a className={router.pathname == item.url ? 'active' : ''}>
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

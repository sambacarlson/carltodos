import React from 'react'


export default function Navbar() {

  return (
    <div className="flex flex-row items-center justify-between m-1">
      <img src="assets/todoist.svg" alt="logo" className="w-6 rounded-md" />
      <p className="font-nunito font-semibold">Daily Battle Plan</p>
      <div className="text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"/></svg>
      </div>
    </div>
  )
}
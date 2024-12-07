
import React from 'react'
export default function Formbutton({ title, type = "submit", onClick, className, loading }) {
  return (
    <div className=''>
      <button
      disabled={loading ? true : false}
        onClick={onClick}
        type={type} className={`${loading ? 'bg-primary/60 cursor-not-allowed py-[1.2rem] px-4' : 'bg-primary hover:bg-primary/80 py-[0.80rem] px-6'} text-white w-full rounded-md ${className}`}>
        <div className="flex items-center justify-center gap-3">
          {!loading ? title : <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
        </div>
      </button>
    </div>
  )
}

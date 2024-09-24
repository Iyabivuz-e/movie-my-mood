import React from 'react'
import { moods } from '../../helpers/Moods'
import Link from 'next/link';

const Moods = () => {
  return (
    <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 w-[80%] max-sm:w-[90%] m-auto items-center mt-12">
      {moods.map((mood) => (
        <Link href="/" key={mood.id} className="btn text-lg px-5 bg-base-200 btn-active">
          {mood.name}
        </Link>
      ))}
    </div>
  );
}

export default Moods

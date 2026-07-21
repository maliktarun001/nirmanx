import { NAV_LINKS } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-white p-[10px_9px_12px_37px] max-w-322.5 mx-auto rounded-full">
     <div className="flex items-center justify-between">
       <Link href="/">
        <img width={127} height={46} src="/assets/images/webp/logo.webp" alt="logo" />
      </Link>
      <div className="flex gap-8">
          {NAV_LINKS.map((obj, index) =>(
            <div key="index">
              <Link href={obj.link}>{obj.label}</Link>
            </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Header

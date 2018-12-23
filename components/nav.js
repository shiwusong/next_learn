import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>index</a>
        </Link>
        {/* <a href="/">index</a> */}
      </li>
    </ul>
    <ul>
      <li>
        <Link href="/about">
          <a>about</a>
        </Link>
        {/* <a href="/about">about</a> */}
      </li>
    </ul>
  </nav>
)

export default Nav

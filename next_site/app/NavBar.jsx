import Link from 'next/link'
 
function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/mint">mint</Link>
      </li>
      <li>
        <Link href="/profile">profile</Link>
      </li>
    </ul>
  )
}
 
export default Navbar
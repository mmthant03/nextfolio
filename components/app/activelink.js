import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ActiveLink = ({ href, children }) => {
    const router = useRouter()
    // const [isActive, setActive] = useState(false)
    let isActive = false

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = 'font-sans text-blue-300 text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-xl text-sm font-medium'
        isActive = true
    }
    else {
        isActive = false
    }

    return (
        <Link href={href}>
            {isActive
                ? React.cloneElement(children, { className, 'aria-current':'page' })
                : React.cloneElement(children, { className })
            }
        </Link>
    )
}

export default ActiveLink
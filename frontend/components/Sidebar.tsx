"use client"
import Link from 'next/link'
import { LayoutDashboard, MessageSquare, Search, UserPlus, GraduationCap, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Sidebar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  const menuItems = [
    { name: 'Platform', icon: LayoutDashboard, href: '/platform' },
    { name: 'Chat', icon: MessageSquare, href: '/chat' },
    { name: 'Tutor Search', icon: Search, href: '/tutor-search' },
    { name: 'Join as a Tutor', icon: UserPlus, href: '/join-as-tutor' },
    { name: 'Student Information', icon: GraduationCap, href: '/student-info' },
  ]

  const courses = [
    { name: 'Course 1', href: '/course-1' },
    { name: 'Course 2', href: '/course-2' },
    { name: 'Course 3', href: '/course-3' },
  ]

  return (
    <aside className="bg-[#011627] w-80 min-h-screen p-4 border-r-2 border-[#89CFF0]">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 text-[#89CFF0] hover:bg-[#33d1ff]/10 rounded-md p-2 transition-colors"
              >
                <item.icon className="h-5 w-5 text-[#33d1ff]" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}

          {/* Dropdown for Courses */}
          <li>
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="flex items-center space-x-3 text-[#89CFF0] hover:bg-[#33d1ff]/10 rounded-md p-2 transition-colors w-full text-left"
            >
              <GraduationCap className="h-5 w-5 text-[#33d1ff]" />
              <span>Courses</span>
              <ChevronDown className={`h-4 w-4 text-[#33d1ff] transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCoursesOpen && (
              <ul className="space-y-1 pl-6 mt-2">
                {courses.map((course) => (
                  <li key={course.name}>
                    <Link
                      href={course.href}
                      className="flex items-center space-x-3 text-[#89CFF0] hover:bg-[#33d1ff]/10 rounded-md p-2 transition-colors"
                    >
                      <span>{course.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
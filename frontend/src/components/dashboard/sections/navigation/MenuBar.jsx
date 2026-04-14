/**
 * Menubar 
 * A container for multiple MenuItem components, arranging them vertically.
 * - Manages the list of navigation items, passing individual data (title, icon, URL) to each MenuItem.
 * - Designed to be integrated into the Navigation component.
 */
import React from 'react'
import MenuItem from './MenuItem'

export default function MenuBar() {
    // List of menu Items
    const navLinks = [
        {id:1, title:"Dashboard" , iconName:"home" , url:"/dashboard"},
        {id:2 ,title:"Courses" , iconName:"book" , url:"/dashboard/courses"},
        {id:3 ,title:"Professors" , iconName:"professor" , url:"/dashboard/professors"},
        {id:4 ,title:"Notifications" , iconName:"notif" , url:"/dashboard/notification"},
        {id:5, title:"Settings" , iconName:"setting" , url:"/dashboard/settings"}
    ]
  return (
    <nav className="ps-20 pt-20 space-y-10">
        {navLinks.map((item) =>(
            <MenuItem
            key={item.id}
            title={item.title}
            iconName={item.iconName}
            url={item.url}
            />
        ))}
    </nav>
  )
}

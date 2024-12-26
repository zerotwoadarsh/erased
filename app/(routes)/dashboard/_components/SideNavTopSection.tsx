'Use client'
import React from 'react'
import { ChevronDown, LogOut, Settings, User } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { Separator } from '@radix-ui/react-separator'

const SideNavTopSection = () => {

    const menu = [
        {
            id: 1,
            name: "Create Team",
            path: '/teams/create',
            icon: User
        },
        {
            id: 2,
            name: 'Settings',
            path: '/teams/settings',
            icon: Settings
        }
    ]
    return (
        <Popover>
            <PopoverTrigger>
                <div className='flex items-center gap-3 hover:bg-gray-300'>
                    {/* <Image src='/public/lolo.svg' width={40} height={40}/> */}
                    <h2 className='flex gap-2 items-center'>Team Name <ChevronDown /></h2>

                </div>
            </PopoverTrigger>
            <PopoverContent className='ml-7 p-4'>
                {/* Team Section */}
                <div>
                    <h2>Team Name</h2>
                </div>
                {/* Menu Section */}
                <Separator className='mt-2' />
                <div>

                    {menu.map((item) => (
                        <h2 key={item.id} className='flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg cursor-pointer text-sm' >
                            <item.icon className=' h-4 w-4' />
                            {item.name}
                        </h2>
                    ))}
                    <LogoutLink>
                        <h2 className='flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg cursor-pointer text-sm' >
                            <LogOut className=' h-4 w-4' />
                            Logout
                        </h2>
                    </LogoutLink>
                </div>
                <Separator className='mt-2' />
                {/* User Info */}
            </PopoverContent>

        </Popover>
    )
}

export default SideNavTopSection
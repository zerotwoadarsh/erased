'use client'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import React, { useEffect } from 'react'
import DashboardTable from './_components/DashboardTable'
import DashboardHeader from './_components/DashboardHeader'



function Dashboard() {
  const convex = useConvex();
  const { user } = useKindeBrowserClient() as { user: { email: string, given_name: string, picture: string } };

  const createUser = useMutation(api.user.createUser);

  const checkUser = async () => {
    if (user?.email) {
      const result = await convex.query(api.user.getUser, { email: user.email });
      if (!result?.length) {
        createUser({
          name: user.given_name,
          email: user.email,
          image: user.picture
        }).then((resp) => {
          console.log(resp);
        });
      }
    }
  }

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  return (
    
    <div className="text-white">
      {/* <button>
        <LogoutLink>Logout</LogoutLink>
      </button> */}
      <DashboardHeader user={user} />
      <DashboardTable />
    
    </div>
  )
}

export default Dashboard
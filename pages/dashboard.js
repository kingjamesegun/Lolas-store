import React from 'react';
import Sidebar from '../components/Sidebar';
import NestedLayout from "../components/NestedLayout";
import Navbar from '../components/Navbar';

export default function Dashboard() {
    const [closed,setClosed] = React.useState(true);
    return (
        <div className="h-screen bg-[#E5E7EB] flex mx-auto max-w-screen-2xl">
          {
            closed && 
            <section className="mr-1 hidden transform duration-150 ease-in-out lg:flex">
              <Sidebar/>
            </section>
          }
          <section className="flex-grow">
            <Navbar handleClose={()=>setClosed(!closed)}/>
            <main className='p-1'>
              {/* main content comes here */}
              Content here
            </main>
          </section>
        </div>
    )
  }
  
Dashboard.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};


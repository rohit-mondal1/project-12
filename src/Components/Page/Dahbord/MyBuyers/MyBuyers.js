import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Authcontext } from '../../../Context/Usercontext';
import BuyersCard from './BuyersCard';

const MyBuyers = () => {
    const {roll} = useContext(Authcontext)
    const { data =[] , isLoading } = useQuery({
        queryKey: ['booking' , roll?.email],
        queryFn: async () => {
          const res = await fetch(`http://localhost:8000/booking?email=${roll?.email}`);
          const data =await res.json();
          return data;
        },
      });
    
    if(isLoading){
        return <div className="w-16 mx-auto my-40 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
    }
    
    return (
        <div>
            {
                data.map(d =>  <BuyersCard key={d._id} byr={d}  />)
            }
           
        </div>
    );
};

export default MyBuyers;
import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';

function Header() {
    return (
       <div className='p-5 border-b shadow-sm'>
        <div className='flex items-center justify-between' >
            <Image src={'/logo.svg'} alt="Logo" width={100} height={50}/>
            <Button>Get Started</Button>
        </div>
       </div>
    );
}
export default Header;
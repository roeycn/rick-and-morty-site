import React from 'react'
import Image from "next/image";

const SpinnerOld = () => {

    return (
        <div>
            <Image className='w-[200px] m-auto block' src={'./spinner.gif'} alt={'loading..'} /> ;
        </div>
    )
}

export default SpinnerOld;
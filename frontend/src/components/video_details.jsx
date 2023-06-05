import React from 'react'
function Video_details(props) {
    
    return (
        <div >
            <div className='shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-[400px] p-[20px] rounded-lg '>
            <iframe  src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen" className='w-[350px] h-[200px] rounded-lg'></iframe><br />
                {/* <h1 className='text-left font-bold indent-[45px]'>{ props.profile_name}</h1><br /> */}
                <div className='flex gap-[2rem] content-center'>
                 
                    <h1 className='text-xl font-bold'>{props.name}</h1>
                </div>
                <div className='flex gap-[2rem] content-center'>
                  
                    <div className='text-sm'>{props.description}</div>
                </div>
                

            </div>
        </div>
    )
}

export default Video_details
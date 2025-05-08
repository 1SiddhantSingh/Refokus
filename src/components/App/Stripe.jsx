import React from 'react'


// const Stripe = ({ val }) => {
 
//   return(
//     <div className='max-w-72 px-4 py-3 border-t-1 border-b-1 border-zinc-700 border-r-1 flex justify-between items-center'>
//        <img src={val.url} alt='' />
        
//         <span className='font-semibold'>{val.number}</span>
//     </div>
//   )
// }

const Stripe = ({ val }) => {
	return (
		<div className="w-[16.66%] flex justify-between items-center px-4 py-5 border-t border-b border-r border-zinc-600">
			<img src={val.url} alt="stripe" />
			<span className="font-semibold">{val.number}</span>
		</div>
	);
};

export default Stripe
import { FunctionComponent } from "react";
import { ISkill } from '../../type';
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css"

const Bar:FunctionComponent<{data: ISkill}> = ({data:{ Icon, level, name }}) => {
	const variants = {
		initial: {
		  width: 0,
		},
		animate: {
		  width: level,
		  transition: {
		    duration: 0.4,
		    type: "spring",
		    damping: 10, 
		    stiffness: 100,
		  },
		},
	      };
	    

	
	return (
		<div className="font-sans text-black bg-gray-200 rounded-full ">
			
			<motion.div className="flex items-center justify-between mb-2 rounded-full shadow-md bg-gradient-to-r from-yellow-400 to-red-400 "
				style={{width: level}}
				variants={variants}
				initial="initial"
				animate="animate"
			>
				<div className="flex m-3">
					<Icon className="mx-2 mt-1 text-lg" />
					<span className="text-center">{name}</span>
				</div>
				<div className="pr-4 text-xs">
				{level}
				</div>
				
			
			</motion.div>
			
		</div>
	)
}

export default Bar;

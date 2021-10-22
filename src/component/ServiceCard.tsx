import { FunctionComponent } from "react";
import { IService } from "../../type";
import "tailwindcss/tailwind.css";

const ServiceCard:FunctionComponent<{service: IService}> = ({service:{Icon, about, title}}) => {
	return (
		<div  className="flex items-center p-4">
			<Icon className="w-12 h-12"/>
			<div className="mx-4">
				<h4 className="font-bold ">{title}</h4>
				<p>{about}</p>
			</div>
		</div>
	)
}

export default ServiceCard;

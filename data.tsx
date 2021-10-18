import { RiChatSmile2Line, RiEarthFill } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';
import { IService } from './type';


export const services: IService[] = [
	{
		title: 'Character',
		about: 	'긍적적이고 스트레스를 잘 받지 않는 성격으로 활기찬 에너지를 주는 것을 좋아합니다.',
		Icon: RiChatSmile2Line,
	},
	{
		title: 'How to work',
		about: "혼자만 잘하는 것이 아닌, '같이' 잘 할 수 있는 팀원이 되어 도움이 되는 동료가 되겠습니다.",
		Icon: BsFillPeopleFill,
	},
	{
		title: 'Goals',
		about: "저의 목표는 '자신의 실력에 부끄럽지 않은 개발자가 되는 것'입니다. 끊임없이 공부하고 성장하며 저의 실력에 의구심이 들지 않는 개발자가 되겠습니다.",
		Icon: IoIosRocket,
	},
	{
		title: 'Ohter',
		about: '국제학부를 전공하며 다양한 분야에 대해 공부하고 경험할 수 있었습니다. 이러한 경험을 바탕으로 시야가 넓은 개발자가 되고 싶습니다.',
		Icon: RiEarthFill,
	},

	
	
]
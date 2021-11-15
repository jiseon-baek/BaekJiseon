import { RiChatSmile2Line, RiEarthFill } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';
import { IoIosRocket, IoLogoJavascript, IoLogoSlack, IoLogoSass } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { IService, ISkill } from './type';


export const services: IService[] = [
	{
		title: 'Character',
		about: '긍적적이며 스트레스를 잘 받지 않는 성격으로, 다른 사람들에게 활기찬 에너지를 주는 것을 좋아합니다.',
		Icon: RiChatSmile2Line,
		key: 1,
	},
	{
		title: 'How to work',
		about: "혼자만 잘하는 것이 아닌, '같이' 잘 할 수 있는 동료가 되어 팀에 실질적인 도움을 주는 직원이 되겠습니다.",
		Icon: BsFillPeopleFill,
		key: 2,
	},
	{
		title: 'Goals',
		about: "저의 목표는 '자신의 실력에 부끄럽지 않은 개발자가 되는 것'입니다. 끊임없이 공부하고 성장하며 저의 실력에 의구심이 들지 않는 개발자가 되겠습니다.",
		Icon: IoIosRocket,
		key: 3,
	},
	{
		title: 'Ohter',
		about: '국제학부를 전공하며 다양한 분야를 공부하고 경험했습니다. 이러한 경험을 바탕으로 숲을 볼 줄 아는(시야가 넓은) 개발자가 되고 싶습니다.',
		Icon: RiEarthFill,
		key: 4,
	},




]

export const languages: ISkill[] = [
	{
		name: 'HTML',
		level: '90%',
		Icon: AiFillHtml5,
	},
	{
		name: 'CSS3',
		level: '80%',
		Icon: SiCss3,
	},
	{
		name: 'Javascript ES5,6+',
		level: '70%',
		Icon: IoLogoJavascript,
	},
	{
		name: 'Next.js',
		level: '70%',
		Icon: SiNextdotjs,
	},
	{
		name: 'React',
		level: '70%',
		Icon: FaReact,
	},
	{
		name: 'Typescript',
		level: '50%',
		Icon: SiTypescript,
	},

	{
		name: 'SCSS',
		level: '70%',
		Icon: IoLogoSass,
	}
]

export const tools: ISkill[] = [
	{
		name: 'Git',
		level: '70%',
		Icon: BiGitBranch,
	},
	{
		name: 'Slack',
		level: '70%',
		Icon: IoLogoSlack,
	},
	{
		name: 'Figma',
		level: '60%',
		Icon: FiFigma,
	},


]
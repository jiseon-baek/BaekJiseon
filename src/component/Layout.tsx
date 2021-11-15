import Navbar from './Navbar';
import "tailwindcss/tailwind.css";

type Props = {
	children: any,

}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div>
				<Navbar />
				{children}
			</div>
		</>
	)
}

export default Layout

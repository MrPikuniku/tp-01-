interface PageButtonProps {
    onClick?: () => void;
    label: string;
}
export default function PageButton({
    onClick,
    label,
}: PageButtonProps) {
	return (
		<span
		onClick={onClick}
		className=" cursor-pointer text-lg py-4 px-40 m-2 text-lg text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
	>
		{label}
	</span>
	)
}
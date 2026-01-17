import * as icons from "react-icons/ri";
export * as icons from "react-icons/ri";
// keyof typeof icons

export const IconComponent = ({ iconName, size = 20 }: { iconName: string, size?: number }) => {
	const ChakraIcon = icons[iconName as keyof typeof icons];
	return <ChakraIcon size={ size } />
}

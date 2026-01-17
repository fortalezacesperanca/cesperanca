import type { ImageProps } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import { useEffect } from "react";
import { useImage } from "../hooks/useImage";

export function Image({
	path,
	...props
}: {
	path: string
} & ImageProps) {
	const [src, load] = useImage()

	useEffect(() => {
		load(path)
	}, [])

	return (
		<ChakraImage
			{ ...props }
			// alignSelf={ "center" }
			// maxWidth={ "320px" }
			// height={ "180px" }
			// aspectRatio={ 16 / 9 }
			src={ src }
		// alt="Green double couch with wooden legs"
		/>
	)
}

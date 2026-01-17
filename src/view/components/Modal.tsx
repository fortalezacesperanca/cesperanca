import { CloseButton, Dialog } from "@chakra-ui/react";

export function Modal({ children, open, onOpenChange }: any) {
	return (
		<Dialog.Root open={ open } onOpenChange={ onOpenChange } placement={ "center" } size={ "md" }>
			<Dialog.Trigger />
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<Dialog.CloseTrigger />
					<Dialog.Header>
						<Dialog.Title />
						<Dialog.CloseTrigger asChild>
							<CloseButton size="2xl" />
						</Dialog.CloseTrigger>
					</Dialog.Header>
					<Dialog.Body p={ 4 }>
						{ children }
					</Dialog.Body>
					<Dialog.Footer />
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>)
}

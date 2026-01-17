import { Center, Flex, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { RiCamera2Fill } from "react-icons/ri";
import { Model } from "../../../domain/model";
import { Modal } from "../../components/Modal";
import { WidgetTitle } from "../../components/WidgetTitle";
import { useJSON } from "../../hooks/useJSON";

export const PhotoGridWidgetURL = ({ path }: { path: string }) => {
  var [photos] = useJSON<Model.Photos>({ path, defaultValue: [] });

  var [currentPhoto, setCurrentPhoto] = useState("");
  const [openModal, setOpenModal] = useState(false);

  function openPreview(photo: string) {
    setCurrentPhoto(photo);
    setOpenModal(true);
  }

  return (
    <Flex direction="column">
      <Flex mb={4}>
        <WidgetTitle
          text={"Veja nossa galeria"}
          icon={<RiCamera2Fill />}
        />
      </Flex>

      <SimpleGrid
        columns={[2, 3, 4]}
        gap={8}
      >
        {photos.map((photo, i) => {
          return (
            <HStack key={i}>
              <Image
                shadow="lg"
                src={photo}
                cursor={"button"}
                onClick={() => openPreview(photo)}
              />
            </HStack>
          );
        })}
      </SimpleGrid>

      <Modal
        open={openModal}
        onOpenChange={(e: any) => setOpenModal(e.open)}
      >
        <Center>
          <Image
            src={currentPhoto}
            shadow="lg"
            maxW={"100%"}
            maxH={"75vh"}
          />
        </Center>
      </Modal>
    </Flex>
  );
};

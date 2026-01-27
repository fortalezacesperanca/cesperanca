// import {
//   Box,
//   Button,
//   Card,
//   Center,
//   Flex,
//   Icon,
//   SimpleGrid,
//   Text,
// } from '@chakra-ui/react';
// import {
//   RiArrowRightLine,
//   RiCalendar2Fill,
//   RiMapPin2Fill,
//   RiTimeFill,
// } from 'react-icons/ri';
// import { Link } from 'react-router';
// import type { Model } from '../../../domain/model';
// import { Image } from '../../components/Image';
// import { Widget } from '../../components/Widget';
// import { useJSON } from '../../hooks/useJSON';
// import { getUniqueEventURI, Routes } from '../../routes/routes';

// export default function EventsWidgetV4({
//   json,
//   showActionButton = true,
// }: {
//   json: string;
//   showActionButton?: boolean;
// }) {
//   let [events] = useJSON<Model.Events>({ path: json, defaultValue: [] });

//   events = events.filter((event) => event.isEnabled);

//   return (
//     <Widget
//       actionButtonText={'Ver todos os eventos'}
//       actionButtonLink={Routes.EVENTS}
//       showActionButton={showActionButton}
//       icon={<RiCalendar2Fill />}
//       title="Eventos"
//     >
//       <SimpleGrid
//         gap={6}
//         columns={{
//           base: 1,
//           sm: 2,
//           md: 3,
//           lg: 4,
//           xl: 4,
//         }}
//       >
//         <EventsList events={events} />
//       </SimpleGrid>
//     </Widget>
//   );
// }

// export function EventsList({ events }: { events: Model.Events }) {
//   if (events.length == 0) {
//     return <Text>Ainda não há eventos. Acompanhe para não perder!</Text>;
//   }
//   return (
//     <>
//       {events.map((event, index) => (
//         <Box key={index}>
//           <Card.Root
//             flexDirection="row"
//             overflow="hidden"
//             rounded={'lg'}
//             shadow={'md'}
//           >
//             <Flex width="full">
//               <Flex
//                 className="card.content"
//                 width="full"
//                 flexDirection={{
//                   base: 'column',
//                 }}
//               >
//                 <Box
//                   className="card.image"
//                   paddingBottom={{
//                     base: 0,
//                     md: 0,
//                   }}
//                 >
//                   <Center height={'100%'}>
//                     <Image
//                       alignSelf={'center'}
//                       maxWidth={{
//                         base: '100%',
//                       }}
//                       aspectRatio={2 / 1}
//                       path={event.image}
//                       alt={`${event.name} ${event.description}`}
//                     />
//                   </Center>
//                 </Box>
//                 <Flex
//                   px={'4'}
//                   direction={{
//                     base: 'column',
//                   }}
//                   justifyContent={'center'}
//                   textAlign={'center'}
//                   fontFamily={'FontHeading'}
//                   fontSize={'2xl'}
//                   color={{
//                     _dark: 'gray.300',
//                     _light: 'gray.700',
//                   }}
//                   gap={2}
//                 >
//                   <Box py={4}>
//                     <Text
//                       fontWeight={'bold'}
//                       textTransform={'uppercase'}
//                       color={{
//                         _dark: 'gray.300',
//                         _light: 'primary.600',
//                       }}
//                     >
//                       {getDate(event.date).weekDay}
//                     </Text>
//                     <Text
//                       fontWeight={'medium'}
//                       color={{
//                         _dark: 'gray.300',
//                         _light: 'gray.600',
//                       }}
//                     >
//                       {getDate(event.date).dayAndMonth}
//                     </Text>
//                   </Box>
//                   <Box></Box>
//                   <Box textTransform={'uppercase'}></Box>
//                 </Flex>

//                 <Card.Body
//                   pt={0}
//                   className="card.body"
//                   flexDirection={'column'}
//                 >
//                   <Card.Title
//                     mb={4}
//                     fontSize={'xl'}
//                   >
//                     {event.name}
//                   </Card.Title>
//                   <Box color={'fg'}>
//                     <CardLine text={event.description} />
//                     <CardLine
//                       text={event.time}
//                       icon={<RiTimeFill />}
//                     />
//                     <CardLine
//                       text={event.address}
//                       icon={<RiMapPin2Fill />}
//                     />
//                     <Flex justifyContent={'flex-end'}>
//                       <Link to={getUniqueEventURI(event)}>
//                         <Button
//                           size={'lg'}
//                           colorPalette={'primary'}
//                           fontWeight={'bold'}
//                           _hover={{
//                             textDecoration: 'underline',
//                           }}
//                         >
//                           Ver evento
//                           <Icon>
//                             <RiArrowRightLine />
//                           </Icon>
//                         </Button>
//                       </Link>
//                     </Flex>
//                   </Box>
//                 </Card.Body>
//               </Flex>
//             </Flex>
//           </Card.Root>
//         </Box>
//       ))}
//     </>
//   );
// }

// function getDate(dateString: string) {
//   const [dayNumber, monthNumber, yearNumber] = dateString.split('/');
//   const date = new Date();
//   date.setDate(parseInt(dayNumber));
//   date.setMonth(parseInt(monthNumber));
//   date.setFullYear(parseInt(yearNumber));

//   const weekDay = date
//     .toLocaleDateString('default', {
//       weekday: 'short',
//     })
//     .replaceAll('.', '');
//   const dayAndMonth = date
//     .toLocaleDateString('default', {
//       day: 'numeric',
//       month: 'short',
//     })
//     .replaceAll('.', '');

//   return { weekDay, dayAndMonth };
// }

// function CardLine({ text, icon }: any) {
//   return (
//     <Box
//       mb={2}
//       justifyContent={'left'}
//       alignItems={'center'}
//     >
//       {icon && (
//         <Icon
//           marginEnd={'2'}
//           color="accent.500"
//         >
//           {icon}
//         </Icon>
//       )}
//       <Text
//         display={'inline'}
//         fontSize={'md'}
//       >
//         {text}
//       </Text>
//     </Box>
//   );
// }

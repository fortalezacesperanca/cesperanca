import {
  Button,
  Flex,
  Icon,
  type ConditionalValue,
  type CssProperties,
} from '@chakra-ui/react';
import type React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router';
import { WidgetTitle } from './WidgetTitle';

export function Widget({
  title,
  icon,
  actionButtonText = '',
  actionButtonLink = '',
  showTitle = true,
  showActionButton = true,
  children,
  titleFlexPosition = 'flex-start',
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  actionButtonText?: string;
  actionButtonLink?: string;
  showTitle?: boolean;
  showActionButton?: boolean;
  titleFlexPosition?: ConditionalValue<CssProperties['justifyContent']>;
}) {
  return (
    <Flex
      direction="column"
      gap={4}
    >
      <Flex
        direction={{
          base: 'column',
          sm: 'row',
        }}
        alignItems={'center'}
      >
        {showTitle && (
          <Flex
            flexGrow={1}
            width={'full'}
            justifyContent={titleFlexPosition}
          >
            <WidgetTitle
              text={title}
              icon={icon}
            />
          </Flex>
        )}
        {showActionButton && (
          <Flex
            flexGrow={1}
            width={'full'}
            justifyContent={{
              base: 'center',
              sm: 'flex-end',
            }}
          >
            <Link to={actionButtonLink ? actionButtonLink : ''}>
              <Button
                size={'lg'}
                colorPalette={'primary'}
                fontWeight={'bold'}
                _hover={{
                  textDecoration: 'underline',
                }}
              >
                {actionButtonText}
                <Icon>
                  <RiArrowRightLine />
                </Icon>
              </Button>
            </Link>
          </Flex>
        )}
      </Flex>

      {children}
    </Flex>
  );
}

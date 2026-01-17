import { Blockquote } from '@chakra-ui/react';
import type { Model } from '../../../domain/model';
import { useJSON } from '../../hooks/useJSON';

export default function QuoteWidget({
  path,
  mode = 'random',
  index = -1,
}: {
  path: string;
  mode?: 'random' | 'byIndex';
  index?: number;
}) {
  const [quotes] = useJSON<Model.Quote[]>({ path, defaultValue: [] });

  let quote: Model.Quote = {
    caption: '',
    content: '',
  };
  if (mode == 'random') {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    quote = quotes[quoteIndex];
  } else {
    quote = quotes[index];
  }

  if (!quote) {
    quote = {
      caption: '',
      content: '',
    };
  }

  return (
    <Quote
      quote={quote.content}
      caption={quote.caption}
    />
  );
}

export const Quote = ({
  quote,
  caption,
}: {
  quote: string;
  caption: string;
}) => {
  return (
    <Blockquote.Root colorPalette={'primary'}>
      <Blockquote.Content
        cite={caption}
        fontSize={'3xl'}
      >
        <i>"{quote}"</i>
      </Blockquote.Content>
      <Blockquote.Caption fontSize={'xl'}>
        — <cite>{caption}</cite>
      </Blockquote.Caption>
    </Blockquote.Root>
  );
};

import React, { useEffect } from 'react';
import { createBrowserRouter, useLocation } from 'react-router';
import type { Model } from '../../domain/model';
import AgendaPage from '../page/AgendaPage';
import EventPage from '../page/EventPage';
import EventsPage from '../page/EventsPage';
import MainPage from '../page/MainPage';
import PrivacyPage from '../page/PrivacyPage';
import { PageTemplateV2 } from '../template/PageTemplateV2';

// export const ROOT = '/';
// export const EVENTS = '/events';
// export const AGENDA = '/agenda';
// export const PRIVACY = '/privacy';

export const Routes = {
  ROOT: '/',
  EVENTS: '/events',
  AGENDA: '/agenda',
  PRIVACY: '/privacy',
};

export const createRouter = ({ basename }: { basename: string }) => {
  return createBrowserRouter(
    [
      {
        element: <PageTemplateV2 />,
        children: [
          {
            path: Routes.ROOT,
            element: <MainPage />,
          },
          {
            path: Routes.EVENTS,
            element: <EventsPage />,
          },
          {
            path: `${Routes.EVENTS}/:eventURI`,
            element: <EventPage />,
          },
          {
            path: Routes.AGENDA,
            element: <AgendaPage />,
          },
          {
            path: Routes.PRIVACY,
            element: <PrivacyPage />,
          },
        ],
      },
    ],
    {
      basename,
    },
  );
};

export function getUniqueEventURI(index: number, event: Model.EventItem) {
  const URI = `${index}:${event.name}:${event.date}`;
  return Routes.EVENTS + '/' + encodeURIComponent(URI);
}

export function useHashScroll() {
  const { hash, pathname, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  }, [hash, pathname, key]);

  return null;
}

export function useScrollToTop({ ref }: { ref: React.RefObject<any> }) {
  const { pathname } = useLocation();
  useEffect(() => {
    ref.current.scrollTo({ top: 0 });
  }, [pathname]);
}

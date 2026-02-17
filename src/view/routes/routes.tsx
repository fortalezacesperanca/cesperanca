import React, { useEffect } from 'react';
import { createBrowserRouter, useLocation } from 'react-router';
import type { UiModel } from '../../domain/uimodel';
import AgendaListPage from '../page/AgendaListPage';
import AgendaPage from '../page/AgendaPage';
import EventListPage from '../page/EventListPage';
import EventPage from '../page/EventPage';
import GroupListPage from '../page/GroupListPage';
import MainPage from '../page/MainPage';
import PrivacyPage from '../page/PrivacyPage';
import TestPage from '../page/TestPage';
import { GlobalPage } from '../template/GlobalPage';
import { PageTemplate } from '../template/PageTemplate';

export const Routes = {
  ROOT: '/',
  EVENTS: '/events',
  AGENDA: '/agenda',
  GROUPS: '/groups',
  PRIVACY: '/privacy',
};

export const createRouter = ({ basename }: { basename: string }) => {
  return createBrowserRouter(
    [
      {
        element: <GlobalPage />,
        children: [
          {
            element: <PageTemplate />,
            children: [
              {
                path: '/__',
                element: <TestPage />,
              },
              {
                path: Routes.ROOT,
                element: <MainPage />,
              },
              {
                path: Routes.EVENTS,
                element: <EventListPage />,
              },
              {
                path: `${Routes.EVENTS}/:eventURI`,
                element: <EventPage json="db/events.json" />,
              },
              {
                path: Routes.AGENDA,
                element: <AgendaListPage />,
              },
              {
                path: `${Routes.AGENDA}/:agendaURI`,
                element: <AgendaPage json="db/agenda_cultos.json" />,
              },
              {
                path: Routes.GROUPS,
                element: <GroupListPage />,
              },
              {
                path: Routes.PRIVACY,
                element: <PrivacyPage />,
              },
            ],
          },
        ],
      },
    ],
    {
      basename,
    },
  );
};

export function getUniqueEventURI(event: UiModel.Event) {
  const URI = `${event.name}:${event.day}`;
  return Routes.EVENTS + '/' + encodeURIComponent(URI);
}
export function getUniqueAgendaURI(event: UiModel.Agenda) {
  const URI = `${event.name}:${event.dayOfWeek}`;
  return Routes.AGENDA + '/' + encodeURIComponent(URI);
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

export function useScrollToTop({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log('changeed', ref);
    setTimeout(() => {
      ref.current.scrollTo({ top: 0 });
    }, 50);
  }, [pathname]);
}

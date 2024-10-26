import { createBrowserRouter, redirect } from 'react-router-dom';

import PageBoardNotice from '@pages/board/notice';
import PageBoardQna from '@pages/board/qna';
import PageNotFound from '@pages/404';
import PageMessageSend from '@pages/message/send';
import PageCampaign from '@pages/campaign';
import PageTemplate from '@pages/template';
import PageManageDelivery from '@pages/manage-delivery/manage-delivery';
import PageReport from '@pages/report';
import PageStatistics from '@pages/statistics';
import PageAccounting from '@pages/accounting';
import PageManageUser from '@pages/manage-user/manage-user';
import PageManagePush from '@pages/manage-push/manage-push';
import PageDashboard from '@pages/dashboard';
import LayoutRoot from '@components/layout/LayoutRoot';

export const keysRoute = {
  base: {
    entry: '/',
    notFound: {
      entry: '404',
    },
    board: {
      entry: 'board',
      notice: {
        entry: 'notice',
      },
      qna: {
        entry: 'qna',
      },
    },
    message: {
      entry: 'message',
      send: {
        entry: 'send',
      },
    },
    campaign: {
      entry: 'campaign',
    },
    template: {
      entry: 'template',
    },
    manageDelivery: {
      entry: 'manage-delivery',
    },
    report: {
      entry: 'report',
    },
    statistics: {
      entry: 'statistics',
    },
    accounting: {
      entry: 'accounting',
    },
    manageUser: {
      entry: 'manage-user',
    },
    managePush: {
      entry: 'manage-push',
    },
    dashboard: {
      entry: 'dashboard',
    },
  },
};

export const router = createBrowserRouter([
  {
    path: keysRoute.base.entry,
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        loader: () => redirect(keysRoute.base.board.entry),
      },
      {
        path: keysRoute.base.board.entry,
        children: [
          {
            index: true,
            loader: () => redirect(keysRoute.base.board.notice.entry),
          },
          {
            path: keysRoute.base.board.notice.entry,
            element: <PageBoardNotice />,
          },
          {
            path: keysRoute.base.board.qna.entry,
            element: <PageBoardQna />,
          },
        ],
      },
      {
        path: keysRoute.base.message.entry,
        children: [
          {
            index: true,
            loader: () => redirect(keysRoute.base.message.send.entry),
          },
          {
            path: keysRoute.base.message.send.entry,
            element: <PageMessageSend />,
          },
        ],
      },
      {
        path: keysRoute.base.campaign.entry,
        element: <PageCampaign />,
      },
      {
        path: keysRoute.base.template.entry,
        element: <PageTemplate />,
      },
      {
        path: keysRoute.base.manageDelivery.entry,
        element: <PageManageDelivery />,
      },
      {
        path: keysRoute.base.report.entry,
        element: <PageReport />,
      },
      {
        path: keysRoute.base.statistics.entry,
        element: <PageStatistics />,
      },
      {
        path: keysRoute.base.accounting.entry,
        element: <PageAccounting />,
      },
      {
        path: keysRoute.base.manageUser.entry,
        element: <PageManageUser />,
      },
      {
        path: keysRoute.base.managePush.entry,
        element: <PageManagePush />,
      },
      {
        path: keysRoute.base.dashboard.entry,
        element: <PageDashboard />,
      },
      {
        path: keysRoute.base.notFound.entry,
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: '*',
    loader: () => redirect(keysRoute.base.notFound.entry),
  },
]);

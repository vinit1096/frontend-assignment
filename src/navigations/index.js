// screen imported from one source
import { TaskAddScreen, TaskListScreen, TaskDetailScreen } from '../screens';
import { ROUTE_NAME } from './routes';

// mapping of screens based on the keys passed to navigate method
export const SCREEN_MAPPING = [
  {
    name: ROUTE_NAME.TASK_LIST_SCREEN,
    screen: TaskListScreen,
  },
  {
    name: ROUTE_NAME.TASK_DETAIL_SCREEN,
    screen: TaskDetailScreen,
  },
  {
    name: ROUTE_NAME.TASK_ADD_SCREEN,
    screen: TaskAddScreen,
  },
];

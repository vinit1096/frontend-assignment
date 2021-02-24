// screen imported from one source
import { TaskAddScreen, TaskListScreen, TaskDetailScreen } from '../screens';
import { SCREENS } from './screens';
// mapping of screens based on the keys passed to navigate method
export const SCREEN_MAPPING = [
  {
    name: SCREENS.TASK_LIST_SCREEN,
    screen: TaskListScreen,
  },
  {
    name: SCREENS.TASK_DETAIL_SCREEN,
    screen: TaskDetailScreen,
  },
  {
    name: SCREENS.TASK_ADD_SCREEN,
    screen: TaskAddScreen,
  },
];

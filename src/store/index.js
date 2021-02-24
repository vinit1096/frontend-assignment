import { gql } from '@apollo/client';

// get list of tasks with given meta data
export const GET_TASKS = gql`
  query {
    tasks {
      title
      id
      created_at
      end_time
      start_time
      tags {
        name
      }
    }
  }
`;

// Adds a new task with fileds passed in it
export const ADD_TASK = gql`
  mutation addTask(
    $title: String!
    $start_time: timestamptz
    $end_time: timestamptz
    $tag_id: Int
  ) {
    insert_tasks_one(
      object: {
        title: $title
        start_time: $start_time
        end_time: $end_time
        task_tags: { data: { tag_id: $tag_id } }
      }
    ) {
      id
    }
  }
`;

// Gets the list of tags
export const GET_TAGS = gql`
  query {
    tags {
      id
      name
    }
  }
`;

// Delete task on the basis of a specific id passed
export const DELETE_TASK_BY_ID = gql`
  mutation deleteTaskById($id: Int!) {
    delete_tasks_by_pk(id: $id) {
      id
    }
  }
`;

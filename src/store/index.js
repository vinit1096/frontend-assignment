import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query {
    tasks {
      title
      id
      created_at
      end_time
      tags {
        name
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($title: String!) {
    insert_tasks_one(object: { title: $title }) {
      created_at
    }
  }
`;

export const GET_TAGS = gql`
  query {
    tags {
      id
      name
    }
  }
`;

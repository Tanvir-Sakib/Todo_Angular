export interface Task {
  _id?: string;
  title?: string;
  assignTo?: string;
  description?: string;
  category?: 'Work' | 'Study' | 'Self' | 'Good To Do';
  status?: 'TODO' | 'DONE';
  date?: Date;
  priority?: 'low' | 'high' | 'medium';
}

export interface Task {
  id?: string;
  title?: string;
  description?: string;
  category?: 'Work' | 'Study' | 'Self' | 'Good To Do';
  status?: 'TODO' | 'DONE' | 'IGNORED';
  date?: Date;
  priority?: 'low' | 'high' | 'medium';
}

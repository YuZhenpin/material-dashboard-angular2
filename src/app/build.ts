import {User} from './user';
import {Pipeline} from './pipeline';

export class Build {
    id: number;
    status: number;
    elapse: number;
    queue_id: string;
    user: User;
    pipeline: Pipeline;
  }

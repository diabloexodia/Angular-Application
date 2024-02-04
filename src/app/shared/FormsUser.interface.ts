import { User } from './User.interface';

export interface formuser extends User {
  username: string ;
  email: string;
  avatar: string;
  subject1: number;
  subject2: number;
  subject3: number;
}

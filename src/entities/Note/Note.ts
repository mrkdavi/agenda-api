import { User } from '../User/User';

export interface NoteProps {
  id: string;
  user?: User;
  userId: string;
  subject: string | null;
  content: string;
}

export class Note {
  private props: NoteProps;

  get subject () {
    return this.props.subject;
  }

  get content () {
    return this.props.content;
  }

  get userId () {
    return this.props.userId;
  }

  get user () {
    return this.props.user;
  }

  constructor (props: NoteProps) {
    this.props = props;
  }
}

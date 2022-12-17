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

  get id () {
    return this.props.id;
  }

  get subject (): string | null {
    return this.props.subject;
  }

  set subject (subject: string | null) {
    this.props.subject = subject;
  }

  get content () {
    return this.props.content;
  }

  set content (content: string) {
    this.props.content = content;
  }

  get userId () {
    return this.props.userId;
  }

  set userId (userId: string) {
    this.props.userId = userId;
  }

  get user (): User | undefined {
    return this.props.user;
  }

  set user (user: User | undefined) {
    this.props.user = user;
  }

  constructor (props: NoteProps) {
    this.props = props;
  }
}

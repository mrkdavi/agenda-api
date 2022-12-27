import { User } from '../User/User';

export interface ReminderProps {
  id?: string;
  name: string;
  note?: string | null;
  remindAt: Date;
  reminded: boolean | null;
  userId: string;
  user?: User;
}

export class Reminder {
  private props: ReminderProps;

  constructor (props: ReminderProps) {
    this.props = props;
  }

  mapToObject () {
    return {
      id: this.props.id,
      name: this.props.name,
      note: this.props.note,
      remindAt: this.props.remindAt
    };
  }

  get id () {
    return this.props.id;
  }

  get userId () {
    return this.props.userId;
  }

  get name () {
    return this.props.name;
  }

  set name (name: string) {
    this.props.name = name;
  }

  get note () {
    return this.props.note;
  }

  set note (note: string | null | undefined) {
    this.props.note = note;
  }

  get remindAt () {
    return this.props.remindAt;
  }

  set remindAt (remindAt: Date) {
    this.props.remindAt = remindAt;
  }

  get reminded () {
    return this.props.reminded;
  }

  set reminded (reminded: boolean | null) {
    this.props.reminded = reminded;
  }

  get user () {
    return this.props.user;
  }

  set user (user: User | undefined) {
    this.props.user = user;
  }
}

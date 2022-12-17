import { User } from '../User/User';

export interface ContactProps {
  id?: string;
  name: string;
  phone: string;
  userId: string;
  note?: string | null;
  user?: User
}

export class Contact {
  private props: ContactProps;

  constructor (props: ContactProps) {
    this.props = props;
  }

  mapToObject () {
    return {
      id: this.props.id,
      name: this.props.name,
      phone: this.props.phone,
      note: this.props.note
    };
  }

  get id () {
    return this.props.id;
  }

  get name () {
    return this.props.name;
  }

  set name (name: string) {
    this.props.name = name;
  }

  get phone () {
    return this.props.phone;
  }

  set phone (phone: string) {
    this.props.phone = phone;
  }

  get userId () {
    return this.props.userId;
  }

  get user () {
    return this.props.user;
  }

  get note (): string | null | undefined {
    return this.props.note;
  }

  set note (note: string | null | undefined) {
    this.props.note = note;
  }
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class User {
  private props: UserProps;

  constructor (props: UserProps) {
    this.props = props;
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

  get email () {
    return this.props.email;
  }

  set email (email: string) {
    this.props.email = email;
  }

  get password () {
    return this.props.password;
  }

  set password (password: string) {
    this.props.password = password;
  }
}

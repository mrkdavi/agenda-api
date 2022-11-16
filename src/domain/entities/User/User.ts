export interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class User {
  private props: UserProps;

  get id () {
    return this.props.id;
  }

  get name () {
    return this.props.name;
  }

  get email () {
    return this.props.email;
  }

  get password () {
    return this.props.password;
  }

  set password (password: string) {
    this.props.password = password;
  }

  constructor (props: UserProps) {
    this.props = props;
  }
}

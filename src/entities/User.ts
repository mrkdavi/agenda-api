export interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class User {
  private props: UserProps;

  constructor (props: UserProps) {
    this.props = props;
  }
}

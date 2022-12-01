export interface ContactProps {
  id?: string;
  name: string;
  number: string;
  note: string;
}

export class Contact {
  private props: ContactProps;

  constructor (props: ContactProps) {
    this.props = props;
  }
}

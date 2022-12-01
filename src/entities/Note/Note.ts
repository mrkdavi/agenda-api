export interface NoteProps {
  id?: string;
  subject: string;
  content: string;
}

export class Note {
  private props: NoteProps;

  constructor (props: NoteProps) {
    this.props = props;
  }
}

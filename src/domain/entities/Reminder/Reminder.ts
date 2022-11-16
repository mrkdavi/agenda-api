export interface ReminderProps {
  id?: string;
  name: string;
  note: string;
  remindAt: Date;
}

export class Reminder {
  private props: ReminderProps;

  constructor (props: ReminderProps) {
    this.props = props;
  }
}

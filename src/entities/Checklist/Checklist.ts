import { ChecklistItem } from '../ChecklistItem/ChecklistItem';

export interface ChecklistProps {
  id?: string;
  name: string;
  userId: string;
  items: ChecklistItem[];
}

export class Checklist {
  private props: ChecklistProps;

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

  get items () {
    return this.props.items;
  }

  set items (items: ChecklistItem[]) {
    this.props.items = items;
  }

  constructor (props: ChecklistProps) {
    this.props = props;
  }
}

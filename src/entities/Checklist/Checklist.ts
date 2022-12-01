import { ChecklistItem } from '../ChecklistItem/ChecklistItem';

export interface ChecklistProps {
  id?: string;
  name: string;
  items: ChecklistItem[];
}

export class Checklist {
  private props: ChecklistProps;

  constructor (props: ChecklistProps) {
    this.props = props;
  }
}

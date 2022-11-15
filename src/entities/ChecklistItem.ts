export interface ChecklistItemProps {
  id?: string;
  name: string;
  checked: boolean;
}

export class ChecklistItem {
  private props: ChecklistItemProps;

  constructor (props: ChecklistItemProps) {
    this.props = props;
  }
}

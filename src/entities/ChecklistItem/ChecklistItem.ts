export interface ChecklistItemProps {
  id?: string;
  name: string;
  checked: boolean;
}

export class ChecklistItem {
  private props: ChecklistItemProps;

  get id () {
    return this.props.id;
  }

  get name () {
    return this.props.name;
  }

  set name (name: string) {
    this.props.name = name;
  }

  get checked () {
    return this.props.checked;
  }

  set checked (checked: boolean) {
    this.props.checked = checked;
  }

  constructor (props: ChecklistItemProps) {
    this.props = props;
  }
}

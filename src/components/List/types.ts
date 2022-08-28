export type ListProps<T> = {
  itemsKey: string;
  emptyListMessage?: string;
  fetchItems(): Promise<T[]>;
  renderItem(item: T): JSX.Element;
}

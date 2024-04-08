export interface IPropsPagination {
  current: number;
  total: number;
  range: number;
  perView: number;
  onChange: Function;
}

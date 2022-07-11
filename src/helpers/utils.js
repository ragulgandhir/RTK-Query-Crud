import { data } from './flags';
export const getFlag = (country) =>
  data?.find((item) => item.name === country)?.flag ||
  'https://via.placeholder.com/20/000000/FFFFFF/?text=404';

export const LIMITS = [
  {
    id: 5,
    count: 5,
  },
  {
    id: 10,
    count: 10,
  },
  {
    id: 20,
    count: 20,
  },
  {
    id: 50,
    count: '',
  },
];
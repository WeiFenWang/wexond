import * as React from 'react';

import HistoryItem from '../HistoryItem';
import { HistorySection } from '../../models';
import { Item } from './style';

const preventHiding = (e: any) => {
  e.stopPropagation();
};

export default ({ data }: { data: HistorySection }) => {
  return (
    <Item onClick={preventHiding}>
      {data.items.map(item => (
        <HistoryItem key={item._id} data={item} />
      ))}
    </Item>
  );
};

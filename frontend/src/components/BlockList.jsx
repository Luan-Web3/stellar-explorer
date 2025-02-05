import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function BlockList({ blocks }) {
  if (!Array.isArray(blocks) || blocks.length === 0) {
    return <p>Nenhum bloco encontrado.</p>;
  }

  return (
    <ul>
      {blocks.map((block) => (
        <li key={block.id}>
          <Link to={`/block/${block.id}`}>
            {block.id} - {moment(block.timestamp).format('DD/MM/YYYY HH:mm')} - {block.transaction_count} transações - {block.validator}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BlockList;
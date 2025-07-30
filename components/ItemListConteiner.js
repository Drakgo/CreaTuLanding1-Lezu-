import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      {/* Aquí irá el catálogo de productos en futuras entregas */}
    </section>
  );
};

export default ItemListContainer;
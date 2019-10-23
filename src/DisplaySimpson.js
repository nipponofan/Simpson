import React from 'react';

function DisplaySimpson({ quote }) {
  return (
    <div className="DisplaySimpson">
      <p>
        {quote.character}
      </p>
      <img
        src={quote.image}
        alt={quote.character}
      />
        <p>
          {quote.quote}
        </p>
    </div>
  );
};

export default DisplaySimpson
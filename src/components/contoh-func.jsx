import React from 'react';
import PropTypes from 'prop-types';

function SayHello({ name }) {
  return <h1>Halo, {name}</h1>;
}

function Count({ count }) {
  return <h2>Antrean ke-{count}</h2>;
}

function IsSuccess({ smart }) {
  return <h2>Apakah adit pintar? {smart ? 'Iya' : 'Tidak'}</h2>;
}

function ListKocak({ data }) {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Company({ data }) {
  const { name, city, since } = data;
  return (
    <div>
      <p>Nama: {name}</p>
      <p>Kota: {city}</p>
      <p>Sejak: {since}</p>
    </div>
  );
}

function OnAdd({ score }) {
  return <h3>Score: {score}</h3>;
}

function Screen({ mode }) {
  // ...
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
};

Count.propTypes = {
  count: PropTypes.number.isRequired,
};

IsSuccess.propTypes = {
  smart: PropTypes.bool.isRequired,
};

ListKocak.propTypes = {
  data: PropTypes.array,
};

// ====== Ngebuat semua isi dari array yang user berikan itu harus bertipe data string, kalau tidak bakal error ======
// ListKocak.propTypes = {
//     data: PropTypes.arrayOf(PropTypes.string)
// }

Company.propTypes = {
  data: PropTypes.object,
};

// ===== Sama kek diatas bedanya ini buat object =====
// Company.propTypes = {
//     data: PropTypes.objectOf(PropTypes.string)
// }

OnAdd.propTypes = {
  score: PropTypes.func,
};

Screen.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
};

export { SayHello, Count, IsSuccess, ListKocak, Company, OnAdd, Screen };

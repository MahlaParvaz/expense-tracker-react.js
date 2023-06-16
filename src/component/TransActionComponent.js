import { useEffect, useState } from 'react';
const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredTns, setFilteredTns] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search || search === '') {
      setFilteredTns(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTns(filtered);
  };

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };
  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if (!filterTransactions.length) return <p> Add Some Transaction</p>;
  return (
    <section>
      <input
        type="search "
        placeholder="search ..."
        value={searchItem}
        onChange={searchHandler}
        className="search"
      />
      {filteredTns.length
        ? filteredTns.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{
                borderRight:
                  t.type === 'expense'
                    ? ' 4px solid #16a34a '
                    : ' 4px solid #dc2626',
                backgroundColor: t.type === 'expense' ? '#f0fdf4' : '#fef2f2',
              }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount} </span>
            </div>
          ))
        : 'No Item Matchs !!'}
    </section>
  );
};

export default TransActionComponent;

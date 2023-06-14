const TransActionComponent = ({ transactions }) => {
  return (
    <section>
      {transactions &&
        transactions.map((t) => (
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
            <span>{t.amount}</span>
          </div>
        ))}
    </section>
  );
};

export default TransActionComponent;

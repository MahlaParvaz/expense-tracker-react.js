const TransActionComponent = ({ transactions }) => {
  return (
    <section>
      {transactions.map((t) => (
        <div key={t.id}>{t.desc}</div>
      ))}
    </section>
  );
};

export default TransActionComponent;

function Home() {
  return (
    <Card
      txtcolor="black"
      header="Bad Bank"
      title="Welcome To The Bank"
      text="Your money is safe with us."
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}

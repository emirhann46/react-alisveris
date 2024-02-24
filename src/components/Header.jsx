function Header({ money, total }) {
  return (
    <div>
      Harcamak için {money - total} $ paranız var!
      <p></p>
    </div>
  );
}

export default Header;

const Header = ({ setVisible, visible }) => {
  return (
    <header className='Header'>
      <button
        onClick={() => {
          setVisible(!visible); // on inverse la valeur de `visible` à chaque click
        }}
      >
        Afficher/Masquer Modal
      </button>
    </header>
  )
}

export default Header;
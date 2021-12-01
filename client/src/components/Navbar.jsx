import "../index.css";
const Navbar = () => {
  return (
    <>
      <div className="TopBar Container">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Sofkatify</a>
            <form class="d-flex">
              <input
                class="form-control me-4"
                type="search"
                placeholder="Artistas, canciones o albumes "
                aria-label="Search"
              />
              <button class="btn btn-search" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

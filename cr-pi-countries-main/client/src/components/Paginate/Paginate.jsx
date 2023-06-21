import style from "../Paginate/Paginate.module.css"

const Paginate = ({ currentPage, countriesPerPage, countries, paginate }) => {
    const pageNumbers = [];
  
    const goToNextPage = () => {
      paginate(currentPage + 1);
    };
  
    const goToPrevPage = () => {
      paginate(currentPage - 1);
    };
  
    for (let index = 1; index <= Math.ceil(countries.length / countriesPerPage); index++) {
      pageNumbers.push(index);
    }
  
    return (
      <div>
        <nav>
          <ul>
            <li>
              <button
                className={style.buttonPrev}
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            {pageNumbers &&
              pageNumbers.map((number) => (
                <li className={style.paginate} key={number}>
                  <a
                    className={`${style.button} ${
                      currentPage === number ? style.currentPage : ""
                    }`}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </a>
                </li>
              ))}
            <li>
              <button
                className={style.buttonNext}
                onClick={goToNextPage}
                disabled={currentPage === Math.ceil(countries.length / countriesPerPage)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Paginate;
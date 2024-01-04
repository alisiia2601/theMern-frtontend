import Styles from "./Paginator.module.css";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Paginator = (prop: PaginatorProps) => {
  const pages = Array.from({ length: prop.totalPages }, (_, i) => i + 1);

  return (
    <div className={Styles.container}>
      {pages.map((page) => (
        <button key={page}
          className={page == prop.currentPage ? Styles.active : ""}
          onClick={() => prop.setPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Paginator;
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";

const Book = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const book = getBook(parseInt(params.bookId));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>قیمت کل:{` ${book.amount} تومان`}</h2>
      <p>{book.name}</p>
      <p>تاریخ انتشار: {book.due}</p>
      <p>
        <button
          onClick={() => {
            deleteBook(book.number);
            navigate("/books" + location.search);
          }}
        >
          حذف کتاب
        </button>
      </p>
    </main>
  );
};

export default Book;

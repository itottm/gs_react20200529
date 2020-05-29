import React, {useState, useEffect} from 'react';

const Booklist = props => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));
  }, [props])
  return (
    <div>
      <ul>
        {bookData === null ? (
          <li>Now Loading...</li>
        ) : (
          bookData.data.items.map((x, index) => (
            <li key={index}>
              <img src={x.volumeInfo.imageLinks?.smallThumbnail} alt="" />
              {x.volumeInfo.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default Booklist;

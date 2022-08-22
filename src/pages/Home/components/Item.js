const Item = ({ id, note, date, time, deleteData, submittingState }) => {
  function deleteItem() {
    submittingState.current = true;
    deleteData(function (prev) {
      // 不等於這個id就會給你過，都會丟回之前那個array (?) (問題點 item.id !== id )
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;

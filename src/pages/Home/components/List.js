import Item from './Item';

const List = ({ listData, deleteData, submittingState }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        // 左邊的 note 是 Item.js 裡的 note
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingState={submittingState}
          />
        );
        // <Item key={item} />
      })}
    </div>
  );
};

export default List;

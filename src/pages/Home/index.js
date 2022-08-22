import { useState, useEffect, useRef } from 'react';
import { API_GET_DATA } from '../../global/constants';

import Edit from './components/Edit';
import List from './components/List';
import './index.css';

// promise
async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  // submittingState 永遠會維持在最新狀態的一個值
  const submittingState = useRef(false);

  useEffect(() => {
    // if 不是在提交(送出)資料的狀態，就先return
    if (!submittingState.current) {
      return;
    }
    fetchSetData(data).then((data) => (submittingState.current = false));
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      {/* Edit / List 都是元件，此處被引入。 */}
      <Edit add={setData} submittingState={submittingState} />
      <List
        listData={data}
        deleteData={setData}
        submittingState={submittingState}
      />

      {/* {a}
      <button onClick={plus}>加法</button> */}
    </div>
  );

  // const [a, setA] = useState(100);
  // function plus() {
  //   // setA(a + 200); 點擊"加法" +200
  // 	// prev 為前次的值，以下的寫法可以明確"狀態"
  //   setA(function (prev) {
  //     return prev + 200;
  //   });
  // }
};

export default Home;

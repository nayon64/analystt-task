// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const UserSections = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [totalData, setTotalData] = useState(0)
	const [userData,setUserData]=useState([])
	
	
	useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=3`
    ).then((res) => {
      const total = res.headers.get("x-total-count");
      setTotalData(total);
     return res.json();
	}).then(data => {
		console.log(data)
		setUserData(data)
	})
  }, [currentPage]);
	
console.log(currentPage)
	

	const pages = Math.ceil(totalData / 3);

	const handleIncress = () => {
		if (currentPage === pages) {
		setCurrentPage(1)
		}
		else {
			setCurrentPage(currentPage +1);
		}
  };
	const handledeccess = () => {
    if (currentPage === 1) {
      setCurrentPage(pages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
	
	return (
    <section>
      <div>
        {userData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="pagination">
        <p onClick={handledeccess}>&lt;</p>
        {[...Array(pages).keys()].map((num) => (
          <button
            className={`${num + 1 === currentPage && "selected"}`}
            key={num}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}
        <p onClick={handleIncress}>&gt;</p>
      </div>
    </section>
  );
};

export default UserSections;
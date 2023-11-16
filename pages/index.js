import { useState, useEffect } from 'react'
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'
import { debounce } from 'lodash'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [userInfo, setUserInfo] = useState([]);
  const [userName, setUserName] = useState("")

  useEffect(() => {
    if (userName.trim() === "") {
      // Do not fetch data if userName is empty
      return;
    }
     const getData = setTimeout(() => {
      fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        setUserName('');
      });
     }, 1200)
    
     return () => clearTimeout(getData)
  }, [userName]);

  return (
    <div className="card">
      <Form setUserName={setUserName} userName={userName}/>
      <UserCard userInfo={userInfo}/>
    </div>
  );
}
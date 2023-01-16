import { useCallback, useEffect, useState } from "react";
const URL = 'https://jsonplaceholder.typicode.com/users';


const getRandomUsers = async () => {
    const responce = await fetch(URL);

    const body = responce.json();

    return body.url;
}

export const App = () => {

  const [url, setUrl] = useState(null);
 
  const onClickHandler = async () => {
    const url = await getRandomUsers();

    setUrl(url);
 };
   

   useEffect(() => {
       onClickHandler()
   }, []);
  
   

    return <div>
        <button onClick={onClickHandler}>Click Here</button>
        <span>{url}</span>
        <img src={url} />
    </div>;
}; 
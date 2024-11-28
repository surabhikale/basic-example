import { useEffect, useState } from "react";

export default function useFetchDataURL(url){
    const [data,setData] = useState([]);
    const [loading,setLoading] =useState(false);

    useEffect(() => {
fetch(url).then((res) => res.json())
.then((data) => {
    console.log('123',data);
  setData(data);
  setLoading(false);
});
    },[url]);
 return {data,loading};
}

import styles from "../../styles/Find.module.css";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/FirebaseFirestore";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";

export default function FindScreen() {
  const [qdocs, setQDocs] = useState(" ");
  const [docs, setDocs] = useState([]);

  const Fetchdata  = async () => {
    const data = await getDocs(collection(firestore, "Data"));
    data.docs.forEach(item=>{
        setDocs([...docs,item.data()])
       })
    //    setInterval(() => {console.log(docs[0])}, 1000);
        
  };

  console.log("ss");
  useEffect(() => {
    setTimeout(() => {
      Fetchdata();
    }, 2000);
  }, []);
  return (<>
    {
        docs && docs.map((Data, key)=>{
          return(
            <div className="blog-container" key={key}>
              <h4>{Data.age}</h4>
            </div>
          )
        })
      }
  </>);
}

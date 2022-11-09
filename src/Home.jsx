import {data} from "./data";
import React, { useState, useEffect } from "react";
import Book from "./Book";
import Pagination from "./Pagination";

function Home() {
    const [books, setBooks] = useState(null);
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(data.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);
    const handleSearch = (event) => {
        if(search===""){
            setBooks(null);
            setCount(data.length);
        }
        else{
            let newdata = data.filter(book => {
                if(book.author.toLowerCase().includes(search.toLowerCase())) return true;
                if(book.title.toLowerCase().includes(search.toLowerCase())) return true;
                if(book.subject.toLowerCase().includes(search.toLowerCase())) return true;
                if(book.pub_date.toLowerCase().includes(search.toLowerCase())) return true;
                return false;
            });
            setBooks(newdata);
            setCount(newdata.length);
            console.log(books);
        }

    };
    useEffect(() => {
        handleSearch();
    }, [search]);

    const lastDataIndex = dataPerPage * currentPage;
    const firstDataIndex = lastDataIndex - dataPerPage;
    const currentData = data.slice(firstDataIndex, lastDataIndex);
    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
        <div className="filterSearch" >
            <input type="text" placeholder="search" onChange={e=>setSearch(e.target.value)}/>
            <span>Count {count}</span>
        </div>
        <div>
            {books!=null?books.map((item)=>(
                <Book key={item.id} image={item.image} title={item.title} author={item.author} subject={item.subject} pub_date={item.pub_date}/>
            )
        ):(
           <div>
               {currentData.map((item)=>(
                <Book key={item.id} image={item.image} title={item.title} author={item.author} subject={item.subject} pub_date={item.pub_date}/>
            ))}
            <Pagination postsPerPage={dataPerPage} totalPosts={data.length} paginate={paginate}/>
           </div> 
            )
        }

        </div>
    </div>
  )
}

export default Home
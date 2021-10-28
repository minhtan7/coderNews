import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mainpage from "./components/Mainpage";
import NavbarNews from "./components/NavbarNews";
import SideBar from "./components/SideBar";

function App() {
  const [category, setCategory] = useState("business");
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&page=${currentPage}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setTotalPage(Math.ceil(data.totalResults / 20));
      setData(data.articles);
      setfilterData(data.articles);
    };
    fetchData();
  }, [category, currentPage]);

  useEffect(() => {
    const filter = data.filter((article) => article.title.includes(query));
    setfilterData(filter);
  }, [query]);

  return (
    <div className="App">
      <NavbarNews query={query} setQuery={setQuery} />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideBar category={category} setCategory={setCategory} />
          </div>
          <div className="col-9">
            <Mainpage
              data={filterData}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPage={totalPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

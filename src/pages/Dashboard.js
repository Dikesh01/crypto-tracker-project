import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabComponents from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/Common/Footer";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);
  
  const getData = async()=>{
    const myCoin = await get100Coins()
    if(myCoin){
      setCoins(myCoin); 
      setPaginatedCoins(myCoin.slice(0, 10));
      setIsLoading(false);
    }
  }

  return (
    <div className="main">
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabComponents coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default DashboardPage;

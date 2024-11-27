import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { MagnifyingGlass } from "react-loader-spinner";

import { ArrowUpDownIcon } from "lucide-react";
import { Separator } from "../ui/separator";

import { useDispatch, useSelector } from "react-redux";

import {
  searchStockDataPostgreSql,
  searchTradeInfoPostgreSql,
  searchInstrumentPostgreSql,
  searchCombinedPostgreSql,
  searchIndustryPostgreSql,
} from "../../store/searchSlice";

import {
  searchStockDataClickHouse,
  searchTradeInfoClickHouse,
  searchInstrumentClickHouse,
  searchCombinedClickHouse,
  searchIndustryClickHouse,
} from "../../store/searchSlice";

import { resetSearchResults } from "../../store/searchSlice";

import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

import SpecificStock from "../search-response/SpecificStock";
import SpecificTrade from "../search-response/SpecificTrade";
import SpecificInstrument from "../search-response/SpecificInstrument";
import CombinedData from "../search-response/CombinedData";
import IndustrySearchData from "../search-response/IndustrySearchData";

const SearchBar = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const handleSearch = async (currSymbol, getStartDate, getEndDate) => {
    if (currSymbol === "" || getStartDate === "" || getEndDate === "") {
      toast({
        variant: "destructive",
        title: "Uh Oh! Something Went Wrong.",
        description: "Symbol Cannot be Empty & Dates are Mandatory :(",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });

      return;
    }

    const currentDate = dayjs();
    const start = dayjs(getStartDate);
    const end = dayjs(getEndDate);

    if (start.isAfter(currentDate) || end.isAfter(currentDate)) {
      toast({
        variant: "destructive",
        title: "Uh Oh! Something Went Wrong.",
        description: "Start Date & End Date Cannot Be After Current Date :(",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });

      return;
    }

    try {
      if (database === "PostgreSQL") {
        dispatch(resetSearchResults());
        await dispatch(searchStockDataPostgreSql(currSymbol)).unwrap();
        await dispatch(searchTradeInfoPostgreSql(currSymbol)).unwrap();
        await dispatch(searchInstrumentPostgreSql(currSymbol)).unwrap();
        await dispatch(
          searchCombinedPostgreSql({ getStartDate, getEndDate })
        ).unwrap();
        await dispatch(
          searchIndustryPostgreSql({ getStartDate, getEndDate })
        ).unwrap();
      } else {
        dispatch(resetSearchResults());
        await dispatch(searchStockDataClickHouse(currSymbol)).unwrap();
        await dispatch(searchTradeInfoClickHouse(currSymbol)).unwrap();
        await dispatch(searchInstrumentClickHouse(currSymbol)).unwrap();
        await dispatch(
          searchCombinedClickHouse({ getStartDate, getEndDate })
        ).unwrap();
        await dispatch(
          searchIndustryClickHouse({ getStartDate, getEndDate })
        ).unwrap();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh Oh! Something Went Wrong.",
        description: "Error Fetching Data From Database :(",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  const [database, setDatabase] = useState("PostgreSQL");
  const [symbol, setSymbol] = useState("");
  const [startDate, setStartDate] = useState(
    dayjs(Date.now()).format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(
    dayjs(Date.now()).format("YYYY-MM-DD")
  );
  const [isSearched, setIsSearched] = useState(false);
  const [prevPostgreCombinedTime, setPrevPostgreCombinedTime] = useState(null);
  const [prevClickHouseCombinedTime, setPrevClickHouseCombinedTime] =
    useState(null);
  const [prevPostgreIndustryTime, setPrevPostgreIndustryTime] = useState(null);
  const [prevClickHouseIndustryTime, setPrevClickHouseIndustryTime] =
    useState(null);

  const stockSearchResponse = useSelector(
    (state) => state.search.searchStockData
  );
  const tradeSearchResponse = useSelector(
    (state) => state.search.searchTradeInfo
  );
  const instrumentSearchResponse = useSelector(
    (state) => state.search.searchInstrument
  );
  const combinedSearchResponse = useSelector(
    (state) => state.search.searchCombined
  );
  const industrySearchResponse = useSelector(
    (state) => state.search.searchIndustry
  );

  const stockSearchPerformance = useSelector(
    (state) => state.search.searchStockPerformance
  );
  const tradeSearchPerformance = useSelector(
    (state) => state.search.searchTradePerformance
  );
  const instrumentSearchPerformance = useSelector(
    (state) => state.search.searchInstrumentPerformance
  );
  const combinedSearchPerformance = useSelector(
    (state) => state.search.searchCombinedPerformance
  );
  const industrySearchPerformance = useSelector(
    (state) => state.search.searchIndustryPerformance
  );

  const loading = useSelector((state) => state.search.isLoading);

  useEffect(() => {
    if (
      database === "ClickHouse" &&
      combinedSearchPerformance &&
      combinedSearchPerformance.readSpeed &&
      industrySearchPerformance &&
      industrySearchPerformance.readSpeed
    ) {
      setPrevClickHouseCombinedTime(combinedSearchPerformance.readSpeed);
      setPrevClickHouseIndustryTime(industrySearchPerformance.readSpeed);
    } else if (
      database === "PostgreSQL" &&
      combinedSearchPerformance &&
      combinedSearchPerformance.readSpeed &&
      industrySearchPerformance &&
      industrySearchPerformance.readSpeed
    ) {
      setPrevPostgreCombinedTime(combinedSearchPerformance.readSpeed);
      setPrevPostgreIndustryTime(industrySearchPerformance.readSpeed);
    }
  }, [combinedSearchPerformance, industrySearchPerformance, database]);

  console.log(stockSearchResponse, "Stock Search Response");
  console.log(stockSearchPerformance, "Stock Search Performance");
  console.log(tradeSearchResponse, "Trade Search Response");
  console.log(tradeSearchPerformance, "Trade Search Performance");
  console.log(instrumentSearchResponse, "Instrument Search Response");
  console.log(instrumentSearchPerformance, "Instrument Search Performance");
  console.log(combinedSearchResponse, "Combined Search Response");
  console.log(combinedSearchPerformance, "Combined Search Performance");
  console.log(industrySearchResponse, "Industry Search Response");
  console.log(industrySearchPerformance, "Industry Search Performance");

  console.log(startDate, "Start Date");
  console.log(endDate, "End Date");

  useEffect(() => {
    dispatch(resetSearchResults());
  }, []);

  return (
    <div ref={ref} className="md:px-6 px-4 py-8 bg-gray-900 w-full">
      <div className="flex flex-col sm:flex-row justify-start items-center mb-2 gap-3">
        <DropdownMenu className="rounded-lg px-4">
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-1 h-14 rounded-xl border border-gray-800 text-white bg-gray-700 px-4 py-2 ml-20 hover:bg-gray-500 ">
              <span>Current DB : {database}</span>
              <ArrowUpDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gray-900 text-gray-300">
            <DropdownMenuLabel className="font-semibold text-base">
              Select Database
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={database}
              onValueChange={setDatabase}
            >
              <DropdownMenuRadioItem
                value="PostgreSQL"
                className="cursor-pointer"
              >
                PostgreSQL
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="ClickHouse"
                className="cursor-pointer"
              >
                ClickHouse
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-3">
          <div className="text-white font-semibold">Start Date</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              defaultValue={dayjs(Date.now())}
              className="bg-gray-300 rounded-xl px-4 py-2"
              onChange={(date) => setStartDate(date.format("YYYY-MM-DD"))}
            />
          </LocalizationProvider>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-white font-semibold">End Date</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              defaultValue={dayjs(Date.now())}
              className="bg-gray-300 rounded-xl px-4 py-2"
              onChange={(date) => setEndDate(date.format("YYYY-MM-DD"))}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="flex justify-center mb-3">
        <div className="w-full flex items-center mt-2">
          <Input
            name="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="py-6 rounded-l-2xl bg-yellow-100 text-black outline-none"
            placeholder="Search By Symbol ..."
          />

          <Button
            className="bg-green-600 hover:bg-green-800 text-white h-full rounded-r-2xl"
            onClick={() => {
              handleSearch(symbol, startDate, endDate);
              setIsSearched(true);
            }}
          >
            Search
          </Button>
        </div>
      </div>
      {loading ? (
        <div className="mt-3 flex justify-center items-center">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : null}
      {stockSearchResponse &&
      stockSearchPerformance &&
      tradeSearchResponse &&
      tradeSearchResponse.length > 0 &&
      tradeSearchPerformance &&
      instrumentSearchResponse &&
      instrumentSearchPerformance &&
      combinedSearchResponse &&
      combinedSearchPerformance ? (
        <div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <div className="outline outline-gray-500 py-1 px-3 rounded-full font-semibold bg-gray-700">
              You Searched For : {symbol}
            </div>
            <div className="outline outline-gray-500 py-1 px-3 rounded-full font-semibold bg-gray-700">
              Current Database : {database}
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center gap-3">
            <div className="outline outline-gray-600 inline-block py-2 px-3 rounded-xl font-semibold">
              {database === "ClickHouse"
                ? `Previous PostgreSQL Trade Aggregate Search Read Speed: ${prevPostgreCombinedTime}`
                : `Previous ClickHouse Trade Aggregate Search Read Speed: ${prevClickHouseCombinedTime}`}
            </div>
            <div className="outline outline-gray-600 inline-block py-2 px-3 rounded-xl font-semibold">
              {database === "ClickHouse"
                ? `Previous PostgreSQL Industry Aggregate Search Read Speed: ${prevPostgreIndustryTime}`
                : `Previous ClickHouse Industry Aggregate Search Read Speed: ${prevClickHouseIndustryTime}`}
            </div>
          </div>

          <div className="overflow-x-auto mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center bg-gray-800 text-white">
                    Operation
                  </TableHead>
                  <TableHead className="text-center bg-gray-600 text-white">
                    Read Speed
                  </TableHead>
                  <TableHead className="text-center bg-gray-800 text-white">
                    Throughput
                  </TableHead>
                  <TableHead className="text-center bg-gray-600 text-white">
                    Response
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center bg-gray-800 text-white">
                    Specific Stock Search
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    {stockSearchPerformance.readSpeed}
                  </TableCell>
                  <TableCell className="text-center bg-gray-800 text-white">
                    {stockSearchPerformance.throughput}
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full bg-black hover:bg-gray-800 text-white"
                        >
                          View Stock Search Response
                        </Button>
                      </DialogTrigger>
                      <SpecificStock stockData={stockSearchResponse} />
                    </Dialog>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center bg-gray-800 text-white">
                    Specific Trade Search
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    {tradeSearchPerformance.readSpeed}
                  </TableCell>
                  <TableCell className="text-center bg-gray-800 text-white">
                    {tradeSearchPerformance.throughput}
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full bg-black hover:bg-gray-800 text-white"
                        >
                          View Trade Search Response
                        </Button>
                      </DialogTrigger>

                      <SpecificTrade tradeData={tradeSearchResponse} />
                    </Dialog>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center bg-gray-800 text-white">
                    Specific Instrument Search
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    {instrumentSearchPerformance.readSpeed}
                  </TableCell>
                  <TableCell className="text-center bg-gray-800 text-white">
                    {instrumentSearchPerformance.throughput}
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full bg-black hover:bg-gray-800 text-white"
                        >
                          View Instrument Search Response
                        </Button>
                      </DialogTrigger>

                      <SpecificInstrument
                        instrumentData={instrumentSearchResponse}
                      />
                    </Dialog>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center bg-gray-800 text-white">
                    Trade Aggregate Search
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    {combinedSearchPerformance?.readSpeed}
                  </TableCell>
                  <TableCell className="text-center bg-gray-800 text-white">
                    {combinedSearchPerformance?.throughput}
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full bg-black hover:bg-gray-800 text-white"
                        >
                          View Trade Aggregate Search Response
                        </Button>
                      </DialogTrigger>

                      <CombinedData combinedData={combinedSearchResponse} />
                    </Dialog>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center bg-gray-800 text-white">
                    Industry Aggregate Search
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    {industrySearchPerformance?.readSpeed}
                  </TableCell>
                  <TableCell className="text-center bg-gray-800 text-white">
                    {industrySearchPerformance?.throughput}
                  </TableCell>
                  <TableCell className="text-center bg-gray-600 text-white">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-full bg-black hover:bg-gray-800 text-white"
                        >
                          View Industry Aggregate Response
                        </Button>
                      </DialogTrigger>

                      <IndustrySearchData
                        industryAggregateData={industrySearchResponse}
                      />
                    </Dialog>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-10 flex justify-center items-center">
            <Button
              className="bg-red-800 hover:bg-red-900 text-white rounded-2xl"
              onClick={() => {
                setSymbol("");
                dispatch(resetSearchResults());
                setIsSearched(false);
              }}
            >
              Clear Search Results
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p
            className={`text-2xl font-bold ${
              isSearched && loading === false && !stockSearchResponse
                ? "text-red-600"
                : "text-gray-400"
            }`}
          >
            {loading
              ? "Loading Data ..."
              : isSearched && !stockSearchResponse
              ? "No Data Found"
              : ""}
          </p>
        </div>
      )}
    </div>
  );
});

export default SearchBar;

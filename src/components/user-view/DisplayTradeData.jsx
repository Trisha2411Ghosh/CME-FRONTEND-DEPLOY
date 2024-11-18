import React, { useState, useMemo, useEffect } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

import { Button } from '../ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import { Dialog, DialogTrigger } from '../ui/dialog';

import Pagination from './../../helper/pagination/Pagination.jsx';
import { ArrowUpDownIcon } from 'lucide-react';
import TradeDetailsDialog from './TradeDetailsDialog';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDataFromClickHouse, fetchDataFromPostgreSQL } from '../../store/dataFetchSlice/index.js';


const DisplayTradeData = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const [database, setDatabase] = useState('None');

  useEffect(() => {
    if (database === 'PostgreSQL') {
      dispatch(fetchDataFromPostgreSQL());
    }
    else if(database === 'ClickHouse'){
      dispatch(fetchDataFromClickHouse());
    }
  }, [database, dispatch])


  const searchData = useSelector((state) => state.dataFetch.dataList);
  const searchPerformanceMetrics = useSelector((state) => state.dataFetch.performanceMetrics);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return searchData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, searchData]);
  
  return (
    <>
      <div ref={ref} className="py-2 bg-gray-950">
        <div className='mb-2'>
          <div className="text-center">
            <p className="m-3 mb-5 text-3xl leading-8 font-extrabold tracking-tight text-teal-500 sm:text-4xl capitalize">Mockup Trade Data</p>
          </div>

          <div className='flex justify-start items-center mb-2 px-4 gap-3'>
              <DropdownMenu className='rounded-lg px-4'> 
                <DropdownMenuTrigger asChild>
                  <Button 
                     className="flex items-center gap-1 rounded-xl border border-gray-800 text-white bg-gray-700 px-4 py-2 ml-2 hover:bg-gray-500"
                  >   
                  <span>Current DB : {database}</span>
                  <ArrowUpDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 text-gray-300">
                    <DropdownMenuLabel className='font-semibold text-base'>Select Database</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={database} onValueChange={setDatabase}>
                      <DropdownMenuRadioItem value="None" className='cursor-pointer'>None</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="PostgreSQL" className='cursor-pointer'>PostgreSQL</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="ClickHouse" className='cursor-pointer'>ClickHouse</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
             </DropdownMenu>
            
            {
              database === 'None' ? <div className='text-red-600 font-semibold'>Select Any Database To View Data & Performance Metrics</div> 
              : 
              <div className='flex gap-3'>
                  <DropdownMenu className='rounded-lg px-4'> 
                      <DropdownMenuTrigger asChild>
                        <Button 
                          className="flex items-center gap-1 rounded-xl border border-gray-800 text-white bg-gray-700 px-4 py-2 ml-2 hover:bg-gray-500"
                        >   
                        <span>Current Rows Per Page : {pageSize}</span>
                        <ArrowUpDownIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-gray-900 text-gray-300">
                          <DropdownMenuLabel className='font-semibold text-base'>Select Rows Per Page</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup value={pageSize} onValueChange={setPageSize}>
                            <DropdownMenuRadioItem value={10} className='cursor-pointer'>10</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value={50} className='cursor-pointer'>50</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value={100} className='cursor-pointer'>100</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value={200} className='cursor-pointer'>200</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value={500} className='cursor-pointer'>500</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value={searchData.length} className='cursor-pointer'>All</DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <div className='outline outline-gray-500 py-2 px-3 rounded-xl font-semibold'>Read Speed: {searchPerformanceMetrics.readSpeed}</div>
                  <div className='outline outline-gray-500 py-2 px-3 rounded-xl font-semibold'>Throughput: {searchPerformanceMetrics.throughput} </div>
              </div>
            }
          </div>
        </div>

        {database === 'None' ? null :
          <div className='overflow-x-auto mt-2'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='bg-gray-800'>Symbol</TableHead>
                    <TableHead className='bg-gray-600'>Prev Close</TableHead>
                    <TableHead className='bg-gray-800'>IEP</TableHead>
                    <TableHead className='bg-gray-600'>Change</TableHead>
                    <TableHead className='bg-gray-800'>Percentage Change</TableHead>
                    <TableHead className='bg-gray-600'>Final Value</TableHead>
                    <TableHead className='bg-gray-800'>Final Quantity</TableHead>
                    <TableHead className='bg-gray-600'>Value</TableHead>
                    <TableHead className='bg-gray-800'>FFM_CAP</TableHead>
                    <TableHead className='bg-gray-600'>WEEK_52_HIGH</TableHead>
                    <TableHead className='bg-gray-800'>WEEK_52_LOW</TableHead>
                    <TableHead className='bg-gray-600'>Final Price</TableHead>
                    <TableHead className='bg-gray-800'>Day High</TableHead>
                    <TableHead className='bg-gray-600'>Day Low</TableHead>
                    <TableHead className='bg-gray-800'>Graph Section</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentTableData.map((data) => (
                    <TableRow key={data?.symbol}>
                      <TableCell className='bg-gray-800'>{data?.symbol}</TableCell>
                      <TableCell className='bg-gray-600'>{data?.prevClose}</TableCell>
                      <TableCell className='bg-gray-800'>{data?.iep}</TableCell>
                      <TableCell className='bg-gray-600'>{data?.chng}</TableCell>
                      <TableCell className='bg-gray-800'>{data?.pctChng}</TableCell>
                      <TableCell className='bg-gray-600'>{data?.finalValue}</TableCell>
                      <TableCell className='bg-gray-800'>{data?.finalQuantity}</TableCell>
                      <TableCell className='bg-gray-600'>{data?.value}</TableCell>
                      <TableCell className='bg-gray-800'>{data?.ffmCap}</TableCell>
                      <TableCell className='bg-gray-600'>{data?.week52High}</TableCell>
                      <TableCell className='bg-gray-800'>{data?.week52Low}</TableCell>
                      <TableCell className='bg-gray-600'>{data?.finalPrice}</TableCell>
                      <TableCell className='bg-gray-800'>{data?.dayHigh}</TableCell>
                      <TableCell className='bg-gray-600'>{data?.dayLow}</TableCell>
                      <TableCell className='bg-gray-800'>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className='rounded-full bg-black/[0.96] hover:bg-gray-900 text-white'>View Graph</Button>
                                </DialogTrigger>

                                <TradeDetailsDialog tradeDataDetails={data}/>

                            </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <Pagination
                className="w-full flex justify-center text-white mt-2 mb-2"
                currentPage={currentPage}
                totalCount={searchData.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
              />
        </div>
        }
      </div>
    </>

  )
})

export default DisplayTradeData
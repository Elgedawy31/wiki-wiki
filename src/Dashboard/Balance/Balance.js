import { Link } from "react-router-dom";
import "./balance.css";
import { useGetProductsByNameQuery } from '../../store/actions/Transaction';
import greenIcon from "../../Assets/Balance/Icon-green.png";
import redIcon from "../../Assets/Balance/icon-red.png";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import Pagination from "../../Components/Pagination/Pagination";
import dayjs from "dayjs";
import { useState } from "react";

export default function Balance() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const { data, error, isLoading } = useGetProductsByNameQuery({ 
    page: currentPage, 
    limit: itemsPerPage 
  });
  
  const transactions = Array.isArray(data?.data) ? data.data : [];
  
  // Create meta object from the API response for pagination
  const meta = data ? {
    current_page: data.current_page,
    last_page: data.last_page,
    from: data.from,
    to: data.to,
    total: data.total,
    per_page: data.per_page
  } : null;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(data)
  if (isLoading) return <div><LoadingSpinner /></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 
        className="text-white text-center mb-5"
        data-aos="fade-down" 
        data-aos-duration="800"
      >
        Transactions History
      </h1>
      <div 
        className="bg-balance rounded-20 py-5 px-4"
        data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div></div>
        <div>
          <div
            data-aos="fade-right" 
            data-aos-duration="600"
            data-aos-delay="400"
          >
            <p className="text-grey">NEWEST</p>
          </div>

          {transactions?.map((item, index) => (
            <Link
              to={`/dashboard/balance/${item?.sender?.id}`}
              key={item.id}
              className="d-flex align-items-center justify-content-between text-decoration-none mb-4"
              data-aos="slide-up" 
              data-aos-duration="600"
              data-aos-delay={600 + (index * 100)}
            >
              <div className="d-flex align-items-center gap-4">
                <img 
                      src={item?.coins > 0 ? greenIcon : redIcon} 
                      alt={item?.user?.name} 
                />
                <div className="d-flex justify-content-center flex-column">
                  <p className="mb-0 text-white fs-4">{item?.user?.name}</p>
                  <p className="mb-0 text-grey">{dayjs(item?.created_at * 1000).format('MMMM D, YYYY at h:mm A')}</p>
                </div>
              </div>
              <div>
              <p className={`mb-0 ${item?.coins > 0 ? 'text-green' : 'text-very-red'}`}>
                  {item?.type === 'out' ? `$${item?.coins}` : `$${item?.coins}`}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Pagination Component */}
      {meta && (
        <div
          data-aos="fade-up" 
          data-aos-duration="600"
          data-aos-delay="1000"
        >
          <Pagination 
            meta={meta}
            onPageChange={handlePageChange}
            loading={isLoading}
            className="mt-4"
          />
        </div>
      )}
    </div>
  );
}

import { Link } from "react-router-dom";
import "./balance.css";
import { useGetProductsByNameQuery } from '../../store/actions/Transaction';
import greenIcon from "../../Assets/Balance/Icon-green.png";
import redIcon from "../../Assets/Balance/icon-red.png";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

export default function Balance() {

  const { data, error, isLoading } = useGetProductsByNameQuery();
  console.log(data)
  const transactions = Array.isArray(data?.data) ? data.data : [];

  if (isLoading) return <div><LoadingSpinner /></div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!transactions.length) return <div>No transactions found</div>;


  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  };

  return (
    <div>
      <h1 className="text-white text-center mb-5">Transactions History</h1>
      <div className="bg-balance rounded-20 py-5 px-4">
        <div></div>
        <div>
          <div>
            <p className="text-grey">NEWEST</p>
          </div>

          {transactions.map((item) => (
            <Link
              to={`/dashboard/balance/${item?.id}`}
              key={item.id}
              className="d-flex align-items-center justify-content-between text-decoration-none mb-4"
            >
              <div className="d-flex align-items-center gap-4">
                <img 
                      src={item.dollars > 0 ? greenIcon : redIcon} 
                      alt={item.user.name} 
                />
                <div className="d-flex justify-content-center flex-column">
                  <p className="mb-0 text-white fs-4">{item.user.name}</p>
                  <p className="mb-0 text-grey">{item.date || getCurrentDate()}</p>
                </div>
              </div>
              <div>
              <p className={`mb-0 ${item.dollars > 0 ? 'text-green' : 'text-very-red'}`}>
                  {item.type === 'out' ? `$${item.dollars}` : `$${item.dollars}`}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

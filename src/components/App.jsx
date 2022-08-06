import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "user.json"
import statsData from "data.json"
import friendData from "friends.json"
import transactionData from "transactions.json"

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: "grey",
        paddingTop: "40px",
        gap: "40px",
      }}
    >

      <Profile 
        user={userData}
      />
      <Statistics
        title='Upload stats'
        stats={statsData}
      />
      <FriendList
        friends={friendData}
      />

      <TransactionHistory
        transactions={transactionData}
      />

    </div>
  );
};

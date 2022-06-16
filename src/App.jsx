import user from "json/user.json"
import data from "json/data.json"
import friends from "json/friends.json"
import transactions from "json/transactions.json"

import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/Friend/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

export const App = () => {
return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
  )
};
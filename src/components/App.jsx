import user from "components/json/user.json"
import data from "components/json/data.json"
import friends from "components/json/friends.json"
import transactions from "components/json/transactions.json"

import Profile from "components/user/User";
import Statistics from "components/data/Data";
import FriendList from "components/friends/Friends";
import TransactionHistory from "components/transactions/Transactions";

export const App = () => {
return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
  )
};
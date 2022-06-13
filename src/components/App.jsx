import user from "components/json/user.json"
import data from "components/json/data.json"
// import friends from "components"
// import transactions from "components"

import Profile from "components/user/User";
import Statistics from "components/data/Data";

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
      {/* <FriendList friends={friends} />
      <Transactions items={transactions} /> */}
    </div>
  )
};
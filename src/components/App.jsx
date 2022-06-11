import user from "components/json/user.json"
// import data from "components/data/data.json"
// import friends from "components/friends/friends.json"
// import transactions from "components/transactions/transactions.json"

import Profile from "components/user/User";

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
    </div>
  )
};
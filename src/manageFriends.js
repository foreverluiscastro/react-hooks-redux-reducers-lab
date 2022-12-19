export function manageFriends(state, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload]}
    case "friends/remove":

      console.log( "This is the original state:", state.friends )
      // This is the original state: [
      //   { name: 'Avi', hometown: 'NYC', id: 100 },
      //   { name: 'Joe', hometown: 'Boston', id: 101 },
      //   { name: 'Steven', hometown: 'Philadephia', id: 102 }
      // ]
      console.log( "here is the result of the action:", action )
      // here is the result of the action: { type: 'friends/remove', payload: 101 }
      // here is the result of the action: { type: 'friends/remove', id: 101 }
      let filteredList = state.friends.filter((friend) => friend.id !== action.payload )
      console.log( "This is the filtered list:", filteredList )
      // This is the filtered list: [
      //   { name: 'Avi', hometown: 'NYC', id: 100 },
      //   { name: 'Steven', hometown: 'Philadephia', id: 102 }
      // ]

      return { friends: filteredList}
    default:
      return state
  }
}

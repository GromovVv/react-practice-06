// export const myAction = (value) => {
//   return {
//     type: 'MY_ACTION',
//     payload: value,
//   };
// };

// export const myAction = (value) => ({
//     type: 'MY_ACTION',
//     payload: value,
// })

// export const myAction_2 = {
//   type: 'MY_ACTION',
//   payload: 'super payload 2',
// };

export const increment = value => ({
    type: "counter/Increment",
    payload: value,
})

export const decrement = value => ({
    type: "counter/Decrement",
    payload: value,
})
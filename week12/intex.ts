
//normal way interface and it
// interface user {
//     name: string,
//     age :number
// }

// function sumOfAge(user1:user,user2:user){
//     const sum = user1.age + user2.age;

//     console.log(sum)
// }

// sumOfAge({name:"praivn",age:23},{name:"diksha",age:23})
//useing pick method in type


// interface user {
//     name : string,
//     age :number,
//     loaction:string
// }
// type Onlyage = Pick <user, "age" >
// type UpdatePropsOptional = Partial<Onlyage>

// function sumOfAge(user1:Onlyage,user2:Onlyage){
//     const sum = user1.age + user2.age;

//     console.log(sum)
// }

// sumOfAge({age:23},{age:23})

//select partial

//records
// interface User {
//     id: string;
//     name: string;
//   }
  
//   type Users = Record<string, User>;
  
//   const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
//   };
  
//   console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
//here is new even fancier thing

interface User {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const user = data.find(({ company: { name } }) => name === "Johns Group");
  console.log(user);
};
getUsers();

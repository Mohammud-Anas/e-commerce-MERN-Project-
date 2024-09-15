import React from "react";

const Users = () => {
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const { data } = await axios.get("/api/users");
  //       setUsers(data);
  //     };
  //     fetchUsers();
  //   }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user) => ( */}
            <tr key={"user._id"}>
              <td className="py-2">MD Anas</td>
              <td className="py-2">anas@gmail.com</td>
              <td className="py-2">Admin</td>
              <td className="py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
                  Delete
                </button>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

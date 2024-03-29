"use client";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((users) => (
        <li
          key={users.id}
          className="list-group-item d-flex justify-content-between 
          align-items-center list-group-item-action"
          onClick={() => {
            router.push(`/users/${users.id}`);
          }}
        >
          <div>
            <h5>
              {users.id} {users.first_name} {users.last_name}
            </h5>
            <p>{users.email}</p>
            <img
              src={users.avatar}
              alt={users.email}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Users;

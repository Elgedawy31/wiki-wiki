import React from "react";
import AccessTable from "./AccessTable";
import CollapseItem from "../../Performance/components/CollapseItem";

function Access({ openTarget, setOpenTarget }) {
  const fakeData = [
    {
      id: 1,
      user: {
        name: "John Doe",
        nick_name: "johnny",
        img: null, // you can set an image URL here or use `null` to fallback to the avatar image
      },
      collected: "done", // Possible values: active, paused, finished, pending, refused
      created_at: "2023-09-01T12:00:00Z", // Example date in ISO format
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        nick_name: "jane123",
        img: null, // or use a valid image path
      },
      collected: "in progress",
      created_at: "2023-08-15T12:00:00Z",
    },
    {
      id: 3,
      user: {
        name: "Alice Johnson",
        nick_name: "alice_j",
        img: null,
      },
      collected: "failed",
      created_at: "2023-07-10T12:00:00Z",
    },
    {
      id: 4,
      user: {
        name: "Bob Williams",
        nick_name: "bobby",
        img: null,
      },
      collected: "done",
      created_at: "2023-09-02T12:00:00Z",
    },
    {
      id: 5,
      user: {
        name: "Charlie Brown",
        nick_name: "charlie_b",
        img: null,
      },
      collected: "failed",
      created_at: "2023-08-20T12:00:00Z",
    },
  ];
  return (
    <div>
      {openTarget ? (
        <CollapseItem />
      ) : (
        <AccessTable data={fakeData} setOpenTarget={setOpenTarget} />
      )}
    </div>
  );
}

export default Access;

import React from "react";
import Category from "../(models)/Category";
import CategoryButton from "./viewbookings/components/CategoryButton";
import NavButton from "../components/NavButton";

const Dashboard = async () => {
  const links = [
    {
      name: "View Bookings",
      path: "admin/viewbookings",
    },
    {
      name: "Add Booking",
      path: "admin/addbooking",
    },
    {
      name: "Settings",
      path: "admin/settings",
    },
  ];

  return (
    <main>
      <h1>Dashboard</h1>
      <section className="navButtonContainer">
        {links.map((item, i) => (
          <NavButton item={item} key={i++} />
        ))}
      </section>
    </main>
  );
};

export default Dashboard;

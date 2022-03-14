import React from 'react';
import NestedLayout from "../components/NestedLayout";

export default function Dashboard() {
    return (
        <div>Dashboard</div>)
  }
  
Dashboard.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};


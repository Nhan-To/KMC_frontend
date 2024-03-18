import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ItemTable from "./DataTable.jsx";

function Home() {
    const [displayData, setDisplayData] = useState(null);

    const fetchData =async () => {
        try {
            console.log("here")
            const response = await axios.get("https://kmc-backend.onrender.com/items");
            setDisplayData(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <ItemTable data={displayData || []} />
        </>
    );
}

export default Home;

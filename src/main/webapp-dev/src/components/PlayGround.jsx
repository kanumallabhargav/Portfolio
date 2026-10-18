import { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function PlayGround() {

     const [stats, setStats] = useState([]);

  // Default sort: date ascending
  const [sortConfig, setSortConfig] = useState({
    key: "statDate",
    direction: "asc",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/stats/list")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      });
  }, []);

  // Toggle sorting when a column button is clicked
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  // Sort without modifying the original state array
  const sortedStats = useMemo(() => {
    return [...stats].sort((row1, row2) => {
      const value1 = row1[sortConfig.key];
      const value2 = row2[sortConfig.key];

      let comparison;

      if (sortConfig.key === "statDate") {
        comparison = value1.localeCompare(value2);
      } else if (
        typeof value1 === "number" &&
        typeof value2 === "number"
      ) {
        comparison = value1 - value2;
      } else {
        comparison = String(value1).localeCompare(String(value2));
      }

      return sortConfig.direction === "asc"
        ? comparison
        : -comparison;
    });
  }, [stats, sortConfig]);

  // Display an arrow indicating the active sort direction
  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? " ▲" : " ▼";
  };


    useEffect(() => {
        const blocks = document.querySelectorAll(".block");

        blocks.forEach(block => {
            const hue = Math.floor(Math.random() * 360);
            block.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;
        });
    }, []);

    return (
        <div className="text-white border-amber-400/70 border-2 rounded-xl p-5">
            <h1 className="text-4xl mb-5">This is the Playground</h1>
            <div className="box mb-5"></div>
            <div className="loading-state mb-5"></div>
            <div className="scroll-element flex flex-col gap-5">
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
            </div>


            <table>
      <thead className="">
        <tr>
          {["statDate", "gain", "spent", "protein", "netGain", "totalDeficit"].map((key) => (
            <th key={key}>
              <button
                type="button"
                onClick={() => handleSort(key)}
              >
                {key.toUpperCase()}
                {getSortArrow(key)}
              </button>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {sortedStats.map((item) => (
          <tr key={item.id}>
            <td>{item.statDate}</td>
            <td>{item.gain}</td>
            <td>{item.spent}</td>
            <td>{item.protein}</td>
            <td>{item.netGain}</td>
            <td>{item.totalDeficit}</td>
          </tr>
        ))}
      </tbody>
    </table>

        </div>
    )
}
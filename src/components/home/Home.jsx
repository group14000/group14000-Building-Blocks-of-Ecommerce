const Home = () => {
  const dates = [
    {
      date: "JUL16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    { date: "JUL19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL22", location: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG7 ", location: "CONCORD, CA ", venue: "CONCORD PAVILION" },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl font-bold mb-4 text-center">TOURS</h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Location</th>
              <th className="py-2 px-4 text-left">Venue</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((dateInfo, index) => (
              <tr
                key={dateInfo.date}
                className={`border-b border-gray-300 ${
                  index % 2 === 0 ? "bg-gray-100" : ""
                }`}
              >
                <td className="py-2 px-4">{dateInfo.date}</td>
                <td className="py-2 px-4">{dateInfo.location}</td>
                <td className="py-2 px-4">{dateInfo.venue}</td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                    BUY TICKETS
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

const StatisticCard = ({ amount, title, img }) => {
  return (
    <div className="p-6 text-white bg-gray-800 rounded-lg">
      <div className="flex gap-x-4">
        <div className="w-16 h-16 p-3 bg-white rounded-full">
          <img src={img} alt="" />
        </div>
        <div>
          <p className="mb-2 text-lg font-medium text-gray-400">{title}</p>
          <p className="text-xl font-semibold text-gray-200">{amount} </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;

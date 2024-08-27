const Card = ({ item }) => {
  return (
    <div className="flex justify-center hover:scale-105 duration-10 ">
      <div className="w-full md:w-96  px-4">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={item.image}
              alt=""
              className="object-cover w-full h-64 md:h-48 lg:h-64"
            />
          </figure>
          <div className="card-body p-4 dark:bg-slate-900 dark:text-white dark:border">
            <h2 className="card-title text-xl font-bold mb-2">
              {item.category}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-sm">{item.title}</p>
            <div className="card-actions justify-between mt-2">
              <div className="badge badge-outline">{item.name}</div>
              <div className="badge badge-outline">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

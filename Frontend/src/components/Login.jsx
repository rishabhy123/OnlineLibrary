import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg mb-2">Login</h3>
            <span className="block">Email</span>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Enter your username"
              className="w-3/4 py-4 outline-none rounded-lg border px-2"
            />
            <div>
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <span className="block">Password</span>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-3/4 py-4 outline-none rounded-lg border px-2"
            />
            <div>
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <button className="block mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Login
            </button>
          </form>
          <span className="flex justify-end ">
            Do not have account,{" "}
            <Link to="/signup" className="text-blue-500 underline">
              signup
            </Link>
          </span>
        </div>
      </dialog>
    </>
  );
};

export default Login;

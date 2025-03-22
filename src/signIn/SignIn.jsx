const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-[50px]">
        <div className="card-body p-8">
          <h1 className="text-xl font-bold mb-2 text-left">
            Log into your account
          </h1>
          <fieldset className="fieldset space-y-2">
            <div className="space-y-2">
              <label className="fieldset-label text-black font-medium">
                Email
              </label>
              <input
                type="email"
                className="input input-bordered w-full rounded-xl py-4 focus:ring-2 focus:ring-[#C8DA27]"
                placeholder="Email"
              />
            </div>
            <div className="space-y-2">
              <label className="fieldset-label text-black font-medium">
                Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full rounded-xl py-4 focus:ring-2 focus:ring-[#C8DA27]"
                placeholder="Password"
              />
            </div>
            <div className="text-left">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>
            <button className="btn w-full rounded-xl py-4 text-lg bg-[#C8DA27] border-none hover:bg-[#b4c522]">
              Sign in
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

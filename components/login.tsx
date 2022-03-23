const Login = () => {
  return (
    <section className="flex-col font-sans">
      <div className="absolute top-1/2 left-1/2 bg-[#000] translate-x-[-50%] translate-y-[-50%] text-white box-border p-8 rounded-2xl font-bold">
        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          Login Here
        </h1>
        <div className="flex flex-col gap-4 inp">
          <p>Username</p>
          <input
            className="border-[none] border-b border-b-white bg-transparent outline-none"
            type={'text'}
            placeholder="Id"
          ></input>
          <p>Password</p>
          <input
            type={'password'}
            placeholder="Password"
            className="border-[none] border-b border-b-white bg-transparent outline-none"
          ></input>
          <input
            type={'button'}
            className="border-[none] outline-none bg-[#db2525] text-[#fff] text-xl rounded-xl p-3 hover:bg-[#4ecdff] hover:text-[#000]"
            value={'Login'}
          ></input>
        </div>
      </div>
    </section>
  );
};

export default Login;

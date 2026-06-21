export default function LoginForm() {
  return (
    <div>
      <div className="flex flex-col w-full h-screen items-center justify-center bg-radial-soft">
        <div className="flex flex-col   justify-center bg-white rounded-lg border-gray-400 border-dotted w-[30%]">
          <form className="flex flex-col items-start px-4 py-7 justify-center ">
            <div className="flex flex-col p-4 w-full ">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="p-2 border border-gray-200 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col p-4 w-full">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="">
                  Hasło
                </label>{" "}
                <a
                  href="/reset"
                  className="text-blue-600 text-sm font-semibold"
                >
                  Nie pamiętasz hasła?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Hasło"
                className="p-2 border border-gray-200 rounded-md w-full"
              />
            </div>
            <div className="flex items-center px-4 py-2 w-full">
              <input type="checkbox" className="p-2" />
              <p className="pl-3">Zapamiętaj mnie</p>
            </div>
            <div className="w-full flex items-center justify-center">
              <SubmitButton />
            </div>
          </form>
          <hr className="w-[80%] mx-auto text-gray-200" />
          <div className="flex items-center justify-center py-4">
            <p className="px-2">Nie masz konta?</p>
            <a href="/register" className="text-blue-600 px-2 ">
              Zarejestruj się
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  //   const { pending } = useFormStatus();

  return (
    <button
      //   disabled={pending}
      type="submit"
      className="m-2 p-3 text-taupe-50 bg-primary rounded-md w-2/3 hover:bg-blue-700 transition-colors duration-300"
    >
      Zaloguj
    </button>
  );
}

export default function FormExtra(){
  return(
      <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 focus:ring-lilac-medium border-lilac-medium rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-lilac-light">
          Recuerdame
        </label>
      </div>

      <div className="text-sm">
        <a href="#" className="font-medium text-lilac-light hover:text-lilac-medium">
          Forgot your password?
        </a>
      </div>
    </div>

  )
}
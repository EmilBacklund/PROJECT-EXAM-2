import MainFormComponent from './MainFormComponent';

const Login = () => {
  return (
    <MainFormComponent>
      <div className='md:bg-white md:px-6 md:py-9 flex flex-col gap-2 md:flex-row rounded-b'>
        <input className='input input-shadow' type='email' placeholder='Email' />
        <input className='input input-shadow' type='password' placeholder='Password' />
        <button className='primaryBtn'>LOGIN</button>
      </div>
    </MainFormComponent>
  );
};

export default Login;

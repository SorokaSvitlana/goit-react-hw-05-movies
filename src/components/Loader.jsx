import { Rings } from 'react-loader-spinner';

 function Loader() {
  return ( <Rings
  height="120"
  width="120"
  color="#4fa94d"
  wrapperStyle={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    }}
  visible={true}
  ariaLabel="rings-loading"
    />
  );
}

export default Loader
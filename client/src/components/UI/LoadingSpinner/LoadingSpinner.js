import PuffLoader from 'react-spinners/PuffLoader';

function LoadingSpinner() {
    return <PuffLoader cssOverride={{ display: 'block', margin: '0 auto' }} />;
}

export default LoadingSpinner;

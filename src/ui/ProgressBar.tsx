const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <div className='w-full h-2 bg-gray-200'>
            <div
                className='h-full bg-dark-blue transition-all'
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;

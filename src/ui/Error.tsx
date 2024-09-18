const Error = ({ message }: { message: string }) => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <p className="text-center text-6xl">⛔{message}⛔</p>
        </div>
    );
};

export default Error;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePageTimer = (
    duration: number,
    navigateTo: string,
    isLoading: boolean
) => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading) {
            let timePassed = 0;
            const interval = setInterval(() => {
                timePassed += 100; // افزایش مقدار تایم در هر 100 میلی‌ثانیه
                setProgress((timePassed / duration) * 100);

                if (timePassed >= duration) {
                    clearInterval(interval);
                    navigate(navigateTo);
                }
            }, 100); // هر 100 میلی‌ثانیه یکبار تایمر رو به‌روزرسانی کن

            return () => clearInterval(interval); // پاک کردن تایمر در هنگام تغییر صفحه
        }
    }, [isLoading, navigate, duration, navigateTo]);

    return progress; // مقدار پروگرس بار
};

export default usePageTimer;

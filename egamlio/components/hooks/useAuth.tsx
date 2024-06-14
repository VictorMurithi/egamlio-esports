import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export interface User {
    firstName: string;
    lastName: string;
}

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');

        if (token && firstName && lastName) {
            setUser({ firstName, lastName });
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await fetch('https://stemprotocol.codefremics.com/api/v2/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: email, password: password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("login response:", data);

                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('firstName', data.firstName);
                localStorage.setItem('lastName', data.lastName);
                setUser({ firstName: data.firstName, lastName: data.lastName });
                
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Welcome back, ${data.firstName}!`,
                });

                router.push('/home');
            } else {
                const data = await response.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: data.message || 'Invalid email or password',
                });
            }
        } catch (error) {
            console.error("login Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Login Error',
                text: 'Something went wrong, please try again later.',
            });
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        setUser(null);
        router.push('/');
    };

    return { user, login, logout };
};

export default useAuth;

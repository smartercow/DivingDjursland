import { Button } from '@nextui-org/react'
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../components/Firebase/clientApp';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  }, [user]);
  return (
    <div>User Dashboard
      <Button onClick={logout}>Logud</Button>
    </div>
  )
}

export default Dashboard
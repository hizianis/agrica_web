import { NextPage } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Home: NextPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Hello Agrica</h1>
        </div>
    );
};

export default Home;

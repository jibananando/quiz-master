import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, Bar, AreaChart, Area, PieChart, Pie } from 'recharts';


const Statistics = () => {
    const data = useLoaderData();
    const quizes = data.data;

    return (
        <div>
            <BarChart
                width={300}
                height={300}
                data={quizes}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Statistics;
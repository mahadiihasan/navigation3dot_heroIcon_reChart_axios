import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const marksArray = [
        { id: 1, name: "John", phy: 85, chem: 90, math: 95 },
        { id: 2, name: "Jane", phy: 80, chem: 70, math: 75 },
        { id: 3, name: "Alice", phy: 95, chem: 85, math: 80 },
        { id: 4, name: "Bob", phy: 60, chem: 75, math: 30 },
        { id: 5, name: "David", phy: 70, chem: 80, math: 65 },
        { id: 6, name: "Carol", phy: 75, chem: 90, math: 80 },
        { id: 7, name: "Eve", phy: 85, chem: 80, math: 75 },
        { id: 8, name: "Frank", phy: 90, chem: 95, math: 90 },
        { id: 9, name: "Grace", phy: 75, chem: 80, math: 85 },
        { id: 10, name: "Henry", phy: 80, chem: 75, math: 70 },
        { id: 11, name: "Isabel", phy: 70, chem: 75, math: 80 },
        { id: 12, name: "Jack", phy: 85, chem: 90, math: 95 }
    ]


    return (
        <div>
            <LineChart width={800} height={500} data={marksArray}>
                <Line stroke='#000000' dataKey='phy'></Line>
                <Line stroke='#ff0000' dataKey='chem'></Line>
                <Line dataKey='math'></Line>

                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>

        </div>
    );
};

export default Dashboard;
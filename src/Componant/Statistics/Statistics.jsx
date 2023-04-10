import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignment = [
        {
            id: '1',
            assignment: 'HTML & CSS',
            marks: 60,
            possible_marks: 60,
        },
        {
            id: '2',
            assignment: 'Responsive lending page',
            marks: 60,
            possible_marks: 60,
        },
        {
            id: '3',
            assignment: 'Css framework responsive',
            marks: 60,
            possible_marks: 60,
        },
        {
            id: '4',
            assignment: 'Basic JS',
            marks: 52,
            possible_marks: 60,
        },
        {
            id: '5',
            assignment: 'Intermidiate JS',
            marks: 48,
            possible_marks: 60,
        },
        {
            id: '6',
            assignment: 'JS interctive API',
            marks: 54,
            possible_marks: 60,
        },

        {
            id: '7',
            assignment: 'Basic debuging',
            marks: 60,
            possible_marks: 60,
        },
        {
            id: '8',
            assignment: 'Simple react',
            marks: 60,
            possible_marks: 60,
        }
    ];
    return (
        <div className='container mx-auto my-8'>
            <LineChart
                data={assignment}
                width={800}
                height={500}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 'dataMax + 1000']} />
                <YAxis dataKey="assignment" type="category" />
                <Line dataKey='marks' stroke="#8884d8" />
                <Line dataKey="possible_marks" stroke="#82ca9d" />







            </LineChart>


        </div>
    );
};

export default Statistics;
import React from 'react';
import { Routes, Route } from 'react-router';
import Secret from './Secret';

export default function Dashboard() {
    return ( 
        <div>
            <Routes>
                <Route path='/secret' element={<Secret />} />
            </Routes>
        </div>
     );
}

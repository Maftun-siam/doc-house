import React from 'react';
import useAppointment from '../../Components/hooks/useAppointment';

const MyAppointment = () => {
    const [myappointment] = useAppointment()
    return (
        <div className="mt-20 bg-black">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                   

                        {
                            myappointment.map((appontment, index) => <tr key={appontment._id}>
                                <th>{index + 1}</th>
                                <td>{appontment.name}</td>
                                <td>{appontment.service}</td>
                                <td>{appontment.slot}</td>
                            </tr>)
                        }

                    

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;
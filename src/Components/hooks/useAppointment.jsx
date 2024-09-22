import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosSecure from './useAxiosSecure';

const useAppointment = () => {
    // load appointment data with tanstack query
    const { data: myappointment = [] } = useQuery({
        queryKey: ['myappointment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/myappointment')
            return res.data
        }
    })
    return [myappointment]
};

export default useAppointment;
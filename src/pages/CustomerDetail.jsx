import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function CustomerDetail() {
    const { id } = useParams()
    const [customer, setCustomer] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/users/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.message)
                    return
                }
                setCustomer(response.data)
            })
            .catch((err) => {
                setError(err.message)
            })
    }, [id])

    if (error) return <div className="text-red-600 p-4">{error}</div>
    if (!customer) return <div className="p-4">Loading...</div>

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg max-w-lg mx-auto mt-6">
            <img
                src={customer.image}
                alt={`${customer.firstName} ${customer.lastName}`}
                className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-bold mb-2">{customer.firstName} {customer.lastName}</h2>
            <p className="text-gray-600 mb-1">Email: {customer.email}</p>
            <p className="text-gray-600 mb-1">Phone: {customer.phone}</p>
            <p className="text-gray-600 mb-1">Age: {customer.age}</p>
            <p className="text-gray-600 mb-1">Gender: {customer.gender}</p>
            <p className="text-gray-600 mb-1">Company: {customer.company?.name}</p>
        </div>
    )
}
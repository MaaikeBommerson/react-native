import {memo} from 'react'

const Customers = ({customers, addCustomer}) => {
    console.log("Re-render of customers??")

    return(
        <div>
            <h2>Customers</h2>
            <ul>
                {
                    customers.map((customer, index) => {
                        return(
                            <li key={`cust-${index}`}>{customer}</li>
                        )
                    })
                }
            </ul>
            <button onClick={addCustomer}>Add</button>
        </div>
    )
}

export default memo(Customers)
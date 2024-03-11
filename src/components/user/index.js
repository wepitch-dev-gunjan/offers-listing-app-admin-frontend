import React from 'react'

const UserList = () => {
    let data = [
        {id:1 , name: "xyz", email:"abcd@gmail.com"},
        {id:2 , name: "xyz", email:"abcd@gmail.com"},
        {id:3 , name: "xyz", email:"abcd@gmail.com"},
        {id:4 , name: "xyz", email:"abcd@gmail.com"},
        {id:5 , name: "xyz", email:"abcd@gmail.com"},
        {id:6 , name: "xyz", email:"abcd@gmail.com"},

    ]
    const dlt =()=>{}
    const edit =()=>{}
  return (
    <div>
        <table border={2}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>

            </tr>
            
                {data.map((x,i)=>{
                    return(
                        <tr>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td style={{display:"flex"}}>
                                <button onClick={()=>{edit(x.id)}}>Edit</button>
                                <button onClick={()=>{dlt(x.id)}}>Dlt</button>
                            </td>
                            
                        </tr>

                    )

                })}
            
        </table>
      
    </div>
  )
}

export default UserList

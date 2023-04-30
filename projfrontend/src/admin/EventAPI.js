import { API } from "../Backend";

export const createEvent = (event,id,token) => {
    return fetch(`${API}/event/create/${id}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        // product name is passes as string only
        body: event
    }).then(response => (
        response.json() )).catch(err => console.log(err))
}

export const getAllEvents = () => {
    return fetch(`${API}/events`,{
        method: "GET"
    }).then(response=>{
        return response.json();
    })
} 

export const getEvent = (Id,token) => {
    return fetch(`${API}/event/${Id}`,{
        method: "GET",
        headers: {
            Accept : "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.json()).catch(err => console.log(err))
}

export const updateEvent = (eventId, userId, token, event) => {
    return fetch(`${API}/event/update/${userId}/${eventId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type":"application.json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(event)
    }).then(response =>{
        return response.json()
    }).catch(err => console.log(err))
}

export const getEventPhoto = (Id) => {
    return fetch(`${API}/event/photo/${Id}`,{
        method: "GET"
    }).then(res=>(res)).catch(err=>console.log(err))
}


export const deleteEvent = (productId,userId,token) => {
  
    return fetch(`${API}/event/delete/${userId}/${productId}`,{
        method:"DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => (
        response.json()
    )).catch(err => console.log(err))
}

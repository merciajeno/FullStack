const person = {
    name:'Mercia',
    address:{
        line:'Shree Ranga Apartments',
        city:'Bangalore'
        
    },
    profiles:['linkedin','whatsapp','github'],
    profileFunc :()=>{
        person.profiles.map(
            (profile)=>{
                console.log(profile)
            }
        )
    }
}


export default function Learn()
{
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.profileFunc()}</div>
        </>
    )
}
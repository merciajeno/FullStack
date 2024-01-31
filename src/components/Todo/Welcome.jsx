import { useParams,Link } from "react-router-dom"
function WelcomeComponent()
{
   const {username} = useParams()
  return(
    <>
     <div>Welcome {username} </div>
     <div>
      Manage your todos here- <Link to='/todos'>Go Here</Link>
     </div>
    </>
  )
}

export default WelcomeComponent
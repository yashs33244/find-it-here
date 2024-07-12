import { Button } from "@repo/ui/components/ui/button";
import {Profilebutton} from "@repo/ui/components/profilebutton";
import Frontpage from "../components/Frontpage"
import { authOptions } from './lib/auth';
import { getServerSession } from "next-auth";
import { Entrypage } from "../components/Entrypage";

const getUserDetails = async () =>{
  const session = await getServerSession(authOptions); 
  return session;
}

export default async function Page() {
  const session = await getUserDetails(); 
  if(session?.user){
    <main>
      <Frontpage /> 
    </main>
  }
  return (
    <main>
      {/* <Frontpage />  */}
      <Entrypage/>
    </main>
  );
}

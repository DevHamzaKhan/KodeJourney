import { FloatingNav } from "@/components/ui/FloatingNav";
import {Waitlist} from "@/components/Waitlist";//+
//
export default function Home() {
  return (
    <div> 
      <FloatingNav/>
      <Waitlist />
    </div>
  );
}
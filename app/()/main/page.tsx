import { Button, Input } from "@/shared/ui";
import { Logotype } from "@/shared/ui/logotype/Logotype";


export default function HomePage() {
  return (
    <div>
      <Input type="text" placeholder="Email"/>
      <Button>TEXT</Button>
      <Logotype/>
    </div>
  )
}

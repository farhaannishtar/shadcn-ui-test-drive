import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Are you going to have a life-long career in tech?</AccordionTrigger>
          <AccordionContent>
            Absolutely! As long as you work hard, not LARP, and spend the best use of your time
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </main>
  )
}

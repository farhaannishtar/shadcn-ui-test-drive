// import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import PopoverDemo from "@/components/ui/popover-radix"
import { Flex, Text, Button } from '@radix-ui/themes';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let us go</Button>
      </Flex>
      <PopoverDemo />
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

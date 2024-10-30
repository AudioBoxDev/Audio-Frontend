import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const Faq=()=>{
    return (
      <>
      <div className="w-11/12 px-16 py-28 text-lg m-auto text-white font-roboto">

      <h1 className="text-4xl text-center font-bold mb-8">Have Questions?</h1>
     
      <Accordion type="single" collapsible  className="space-y-5">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-bold">What is AudioBox?</AccordionTrigger>
          <AccordionContent className="text-base">
          AudioBox is a decentralized music streaming platform that empowers artists to maintain full ownership of their music and earn fair revenue. Listeners can discover, stream, and support their favorite artists directly using blockchain technology.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-bold">How does AudioBox benefit artists?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-bold">How can I discover new music on AudioBox?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-bold">What is the NFT Marketplace?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-bold">How do I create an account on AudioBox?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </>
    )
  }
  export default Faq;
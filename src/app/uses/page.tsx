import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'These are the tools I rely on and the gear I use to get things done.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="These are the tools I rely on and the gear I use to get things done."
      intro="No one’s ever actually asked about my setup, but I’m sharing it anyway. These are the tools, gadgets, and apps I use to build, tinker, and procrastinate with style."
    >
      <div className="space-y-20">
        <ToolsSection title="Computers">
          <Tool title='Home Server'>
            I repurposed my old gaming PC into a home server I call Dogmeat. It runs 24/7 and handles everything from self-hosted apps to file storage and backup. It’s not flashy, but it’s solid and dependable — basically the backbone of my home network.
            <ul>
              Specs:
              <li>- AMD FX-8350</li>
              <li>- Nvidia GeForce GTX 1060</li>
              <li>- 32GB RAM</li>
            </ul>
          </Tool>
          <Tool title='PC'>
            This is my daily driver, built in 2020 and still holding up great. I use it for everything from coding and photo editing to gaming and running local dev environments.
            <ul>
              Specs:
              <li>- AMD Ryzen 7 3700X</li>
              <li>- Nvidia GeForce RTX 3070</li>
              <li>- 32GB RAM</li>
            </ul>
          </Tool>
        </ToolsSection>
        <ToolsSection title="3D Printing">
          <Tool title="Creality Ender 3 S1 Pro">
            My first 3D printer and honestly a great intro to the hobby. The build quality is solid, it prints cleanly right out of the box, and it’s been super reliable. I’ve used it for everything from small functional prints to decorative stuff around the house.
          </Tool>
          <Tool title='UltiMaker Cura'>
            This is the slicer I landed on after trying a few. It’s simple enough for quick prints but has enough features to fine-tune when I need to. I like the preview mode and the ability to tweak custom profiles.
          </Tool>
          <Tool title='OctoPi'>
            I’ve got OctoPrint running on a Raspberry Pi 3, which lets me control my printer from anywhere on my network. It’s super handy for remote monitoring and cuts down the need to babysit prints.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Photography">
          <Tool title="Fujifilm X-S20">
            My first real camera and a solid step into photography. I like how compact it is while still feeling powerful, and the film simulations are fun to experiment with. It’s been great for learning and growing my skills.
          </Tool>
          <Tool title="Fujifilm XF 27mm f/2.8 R WR">
            This little lens rarely leaves my camera. It’s super lightweight, sharp, and the focal length is perfect for street photography or just everyday shooting.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

import { constants } from '@/config'
import { H1, H2, Link, List, ListItem, Text } from '@/elements'
import { Page } from '@/layouts'

const title = 'Projects'
const description = 'Some personal projects and tools'
const keywords = 'projects, tools, web, software, development'

export default function Projects() {
  return (
    <Page title={title} description={description} keywords={keywords}>
      <H1>Projects</H1>
      <Text className="opacity-70">{description}</Text>

      <H2>Personal</H2>
      <List className="list-none">
        {constants.projects.map(({ name, description, link, using }) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> — <span>{description}&ensp;</span>
            <Text className="inline text-sm leading-relaxed opacity-70">{using?.join(', ')}</Text>
          </ListItem>
        ))}
      </List>
    </Page>
  )
}

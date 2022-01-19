import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Input,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
          </Main>
  <Input placeholder='Insert a stockticker. Default: VIX' />
    <DarkModeSwitch />
    <Footer>
      <Text>Created by Mikko and Jon Mikkel</Text>
    </Footer>
  </Container>
)

export default Index

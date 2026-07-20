import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components"

interface WelcomeEmailProps {
  name: string
  loginUrl: string
}

export function WelcomeEmail({ name, loginUrl }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to WKalan!</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto p-8 max-w-xl">
            <Heading className="text-2xl font-bold text-gray-900">
              Welcome, {name}!
            </Heading>
            <Section className="mt-6">
              <Text className="text-gray-700 text-base leading-7">
                Thanks for creating an account. We're excited to have you on board.
              </Text>
            </Section>
            <Section className="mt-8 text-center">
              <a
                href={loginUrl}
                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium"
              >
                Go to your account →
              </a>
            </Section>
            <Section className="mt-10 border-t pt-6">
              <Text className="text-gray-400 text-sm">
                If you didn't create this account, you can safely ignore this email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

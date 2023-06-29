import localFont from 'next/font/local'

const PlusJakartaSans = localFont({
  src: [
    {
      path: './assets/fonts/PlusJakartaSans-ExtraLight.woff',
      weight: '100',
      style: 'extra-light',
    },
    {
      path: './assets/fonts/PlusJakartaSans-Light.woff',
      weight: '200',
      style: 'light',
    },
    {
      path: './assets/fonts/PlusJakartaSans-Italic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './assets/fonts/PlusJakartaSans-Regular.woff',
      weight: '400',
      style: 'regular',
    },
    {
      path: './assets/fonts/PlusJakartaSans-SemiBold.woff',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './assets/fonts/PlusJakartaSans-Bold.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: './assets/fonts/PlusJakartaSans-ExtraBold.woff',
      weight: '800',
      style: 'extra-bold',
    },
    
  ],
})

export const metadata = {
  title: 'Teste Front Leadsetp',
  description: 'LeadStep',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={PlusJakartaSans.className}>{children}</body>
    </html>
  )
}

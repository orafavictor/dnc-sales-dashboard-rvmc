import { AvatarsList, Header, CardComponent, CustomTable } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(1000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(1000),
    },
  ]

  const mockTableData = {
    headers: ['Nome', 'Email', 'Action'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome@email.com</span>,
        <button>Action</button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home

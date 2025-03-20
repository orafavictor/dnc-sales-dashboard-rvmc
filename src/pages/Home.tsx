import {
  AvatarsList,
  Header,
  CardComponent,
  CustomTable,
  CustomChart,
} from '@/components'
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
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2456.54, 987.32, 675.89, 754.89, 354.89]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home

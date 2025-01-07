import { GetServerSideProps } from 'next'

import OpenBVE from '@/structures/openbve-pages.json'

interface Props {
  query: string
  data: unknown
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.route as string

  const data = OpenBVE.datas.find(el => el.query === query)

  return {
    props: {
      query,
      data
    }
  }
}

export default function HonamSRT (props: Props) {
  return (
    <div>
      <p>{props.query}</p>
      <p>{JSON.stringify(props.data)}</p>
    </div>
  )
}

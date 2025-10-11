import { getColumns } from "@/api/request/GET/columns"
import { Columns } from "@/components/blocks/column/Columns"
import { Desk } from "@/components/blocks/desk/Desk"
import { Metadata } from "next"

type Props = {
  params: {
    title: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Проект: ${params.title}`,
  }
}

export default async function DashboardPage({ params }: Props) {
  const { title } = params
    const data = await getColumns(title)
    console.log(data)
  return (
    <>
        <h1>Дашборд: {title}</h1>
        <Desk col={data} />
    </>
  )
}
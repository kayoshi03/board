import { getColumns } from "@/services/api/request/GET/columns"
import { Desk } from "@/components/features/canban/desk/Desk"
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
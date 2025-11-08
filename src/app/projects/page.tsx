"use server"
import { Aside } from "@/components/features/project/project-aside/Aside"
import { Board } from "@/components/features/project/project-board/Board"
import "./index.scss"
import { cookies } from "next/headers"

export default async function ProjectsPage() {
  const token = cookies().get("token")?.value
  console.log("TOKEN:", token)
  return (
    <div className="dashboards">
      <div className="dashboards__inner">
        <Aside/>
        <Board/>
      </div>
    </div>
  )
}
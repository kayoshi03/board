import { getDasboards } from "@/api/request/GET/dashboards";
import { Dashboard } from "@/types/dashboards";
import Link from "next/link";
import "./index.scss"



export default async function Board () {
  const data = await getDasboards()
  console.log(data)
  return (
    <div className="dashboards">
      <div className="dashboards__inner">
        <aside className="dashboards__aside">
          <p>Какой нибудь текст</p>
          <p>Доски</p>
          <p>Ваши доски</p>
          <p>Проекты</p>
        </aside>
        <div className="dashboards__board">
          {
            data?.map((item: Dashboard) => (
                <Link title={item.title} className="board__item" href={`dashboards/${item.title}`} key={item.id}>
                  <h2>{item.title}</h2>
                </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
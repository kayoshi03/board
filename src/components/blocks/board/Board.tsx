import { getDasboards } from "@/api/request/GET/dashboards";
import Link from "next/link";
import "./index.scss"


export default async function Board () {
  const data = await getDasboards()

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
            data?.map((item: any) => (
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
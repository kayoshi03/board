import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import "./index.scss"

dayjs.extend(relativeTime);
dayjs.locale('ru');

interface Props {
    date: string | Date
}

export const TimeAgo: React.FC<Props> = ({ date }) => {
    const timeAgo = dayjs(date).fromNow();
    return (
        <p className="time">Изменено {timeAgo}</p>
    )
}
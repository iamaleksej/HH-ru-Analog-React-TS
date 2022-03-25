import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVacancies } from '../../actions/vacancies';
import { IVacancy } from '../types';
import './vacancy.sass';

// interface IVacancyProps {
// 	vacancyId: any;
// }
// interface IVacancyState {
// 	vacancyItem: IVacancy[];
// }
interface VacancyInterface {
	// vacancyItem: IVacancy[];
	vacancyId: any;
	// updateVacancy: () => void;
}
const Vacancy: React.FC<VacancyInterface> = ({ vacancyId }) => {
	// const { name, area, employer, published_at } = vacancyItem;
	const dispatch = useDispatch()
	const [vacancyItem, setVacancyItem] = useState();

	// useEffect(() => {
	// 	updateVacancy();
	// })
	console.log(vacancyId)

	const updateVacancy = () => {
		if (!vacancyId) {
			return;
		}

		dispatch(fetchVacancies())
		// .then((vacancyItem) => {
		// 	setVacancyItem(vacancyItem)
		// })
	}

	return (
		<div className="vacancy">
			<div className="vacancy_wrapper">
				<div className="vacancy-header">
					<div className="vacancy-header__upper-wrapper">
						<div className="vacancy-header__logo">
							<img src="" alt="" className="image" />
						</div>
						<div className="vacancy-header__title-company-city-wrapper">
							<p className="vacancy-header__title">Frontend developer (React)</p>
							<div className="vacancy-header__city-company-wrapper">
								<p className="vacancy-header__company">Winfinity</p>
								<p className="vacancy-header__city">Москва</p>
							</div>
						</div>
					</div>
					<p className="vacancy-header__salary">От 150 000 до 300 000 руб.</p>
				</div>
				<div className="vacancy-description">Мы, Winfinity, занимаемся разработкой инновационных решений в области игорно-развлекательного контента.

					Для создания наших продуктов используются передовые технологии, среди которых: Computer Vision, Unreal Engine, Ultra Low Latency Video Streaming. У нас очень крутой и суперсовременный технопарк - от камер и света, до графических карт, которые почти невозможно найти.

					Сегодня мы на стадии активного развития. Мы создаём масштабный, технологически сложный и в тоже время очень интересный, глобальный проект - частью которого можете стать Вы!

					И если у Вас есть:

					опыт коммерческой разработки на JavaScript от 2 лет;
					опыт коммерческой разработки на React от 2 лет;
					опыт работы в команде с git;
					опыт работы с любым сборщиком (webpack, gulp и т.д.).
					…то Вы именно тот, кого мы ищем!

					Обязательные знания:

					Typescript;
					Webpack;
					Styled-components;
					GraphQL;
					Express;
					MongoDB;
					WebSockets;
					Docker.
					После испытательного срока мы предлагаем:

					возможную релокацию в столицу Латвии с помощью в оформлении всех необходимых документов;
					бесплатную стоянку рядом с современным офисом в центре города;
					медицинскую страховку;
					абонемент в спортивный зал.
					Наша сила - в отсутствии бюрократии, легаси кода, чайка менеджмента, бизнеса, который уже не знает, чего хочет.

					Мы за нестандартные идеи, профессиональный и творческий подход, отличные отношения в коллективе и результат.</div>
			</div>
		</div>
	)
}


export default Vacancy;
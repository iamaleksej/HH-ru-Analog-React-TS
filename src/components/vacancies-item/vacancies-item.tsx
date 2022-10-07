import React from 'react';
import './vacancies-item.sass';
import iconNoFavorite from '../../assets/img/icon-favorite-no-active.png';
import iconFavorite from '../../assets/img/icon-favorite-active.png';
import { IVacancy } from '../types';
import { fetchVacancy } from '../../actions/vacancy';
import { useDispatch } from 'react-redux';

const VacanciesItem: React.FC<{
	filter: any,
	vacanciesItemBlock: any,
}> = ({ filter,
	vacanciesItemBlock }) => {
		return vacanciesItemBlock
	}

const VacanciesItemContainer: React.FC<{ vacanciesItem: IVacancy, filter: {} }> = ({ vacanciesItem, filter }) => {
	const { id,
		name,
		area,
		employer,
		published_at } = vacanciesItem;
	const dispatch = useDispatch()

	let publishedDate = new Date(published_at).getDate() + '.'
		+ Number(new Date(published_at).getMonth() + 1) + '.'
		+ new Date(published_at).getFullYear();

	const onVacancySelected = () => {
		dispatch(fetchVacancy(id))
	}

	const vacanciesItemBlock = (
		<div className="vacancies__item"
			onClick={onVacancySelected}>

			<div className="vacancies__line"></div>
			<div className="vacancies__logo-block">
				<div className="vacancies__logo">
					<img src={(employer?.logo_urls === null) ? '' : employer?.logo_urls?.original} alt="Logo" className="image" />
				</div>
			</div>
			<div className="vacancies__data-block">
				<p className="vacancies__company">{employer.name}</p>
				<p className="vacancies__title">{name}</p>
				<p className="vacancies__city">{area.name}</p>
			</div>
			<div className="vacancies__icon-block">
				<div className="vacancies__icon-favorite">
					<img src={iconNoFavorite} alt="" className="image" />
					{/* <img src={iconFavorite} alt="" className="image " /> */}
				</div>
				<div className="vacancies__date">{publishedDate}</div>
			</div>
		</div>
	)

	return <VacanciesItem
		filter={filter}
		vacanciesItemBlock={vacanciesItemBlock} />
}



export default VacanciesItemContainer;

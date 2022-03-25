import React from 'react';
import './vacancies-item.sass';
import iconNoFavorite from '../../assets/img/icon-favorite-no-active.png';
import iconFavorite from '../../assets/img/icon-favorite-active.png';
import { IVacancy } from '../types';

interface IComponentProps {
	vacancy: IVacancy;
	onVacancySelected: (id: number) => void;
	id: number;

}

const VacanciesItem: React.FC<IComponentProps> = ({ vacancy, onVacancySelected, id }) => {
	const { name, area, employer, published_at } = vacancy;

	// let publishedDate = new Date(published_at);
	let publishedDate = new Date(published_at).getDate() + '.'
		+ Number(new Date(published_at).getMonth() + 1) + '.'
		+ new Date(published_at).getFullYear();
	return (
		<div className="vacancies__item"
			onClick={() => onVacancySelected(id)}>
			<div className="vacancies__line"></div>
			<div className="vacancies__logo-block">
				<div className="vacancies__logo">
					<img src={(employer.logo_urls === null) ? '' : employer.logo_urls.original} alt="Logo" className="image" />
				</div>
			</div>
			<div className="vacancies__data-block">
				<p className="vacancies__company">{employer.name}</p>
				<p className="vacancies__title">{name}</p>
				<p className="vacancies__city">{area.name}</p>
				{/* <div className="vacancies-skills">
					<div className="vacancies-skills__item">jQuery</div>
					<div className="vacancies-skills__item">CSS</div>
					<div className="vacancies-skills__item">React</div>
				</div> */}
			</div>
			<div className="vacancies__icon-block">
				<div className="vacancies__icon-favorite">
					<img src={iconFavorite} alt="" className="image " />
					<img src={iconNoFavorite} alt="" className="image icon-favorite-active" />
				</div>
				<div className="vacancies__date">{publishedDate}</div>
			</div>
		</div>
	)
}


export default VacanciesItem;
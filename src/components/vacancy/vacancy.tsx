import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './vacancy.sass';

const Vacancy: React.FC = () => {
	const { vacancy, loading, error } = useTypedSelector(state => state.vacancyData)
	const { name, area, employer, description, salary } = vacancy;

	const vacancyDescription = () => {
		return { __html: description };
	}

	// console.log(description)
	return (
		<>
			{(Object.entries(vacancy).length != 0) ?
				<div className="vacancy">
					<div className="vacancy_wrapper">
						<div className="vacancy-header">
							<div className="vacancy-header__upper-wrapper">
								<div className="vacancy-header__logo">
									<img src={(employer.logo_urls === null) ? '' : employer.logo_urls.original} alt="Logo" className="image" />
								</div>
								<div className="vacancy-header__title-company-city-wrapper">
									<p className="vacancy-header__title">{name}</p>
									<div className="vacancy-header__city-company-wrapper">
										<p className="vacancy-header__company">{employer.name}</p>
										<p className="vacancy-header__city">{area.name}</p>
									</div>
								</div>
							</div>
							<p className="vacancy-header__salary">
								{(salary.from && salary.to) ? 'от ' : ''}
								{salary.from}
								{(salary.from && salary.to) ? ' до ' : ''}
								{salary.to} руб.</p>
						</div>
						<div className="vacancy-description"
							dangerouslySetInnerHTML={vacancyDescription()}></div>
					</div>
				</div>
				: ''
			}
		</>
	)
}


export default Vacancy;
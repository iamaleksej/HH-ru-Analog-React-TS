import React, { useMemo, useState } from 'react';
import './vacancies-item.sass';
import iconNoFavorite from '../../assets/img/icon-favorite-no-active.png';
import iconFavorite from '../../assets/img/icon-favorite-active.png';
import { IVacancy } from '../types';
import { fetchVacancy } from '../../actions/vacancy';
import { useDispatch } from 'react-redux';
import { fetchFavorites } from '../../actions/favorites';
import { useTypedSelector } from '../hooks/useTypedSelector';

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
	const { favorites } = useTypedSelector(state => state.favoritesData);
	const { vacancies } = useTypedSelector(state => state.vacanciesData);
	const vacItems = vacancies.items;

	const dispatch = useDispatch()

	let publishedDate = new Date(published_at).getDate() + '.'
		+ Number(new Date(published_at).getMonth() + 1) + '.'
		+ new Date(published_at).getFullYear();

	const [isFavorite, setFavorite] = useState(false);
	const onVacancySelected = () => {
		dispatch(fetchVacancy(id))
	}
	const onFavoriteSelected = (e: any) => {
		e.stopPropagation();
		setFavorite(!isFavorite)
		dispatch(fetchFavorites(id))
	}
	// console.log(isFavorite);

	const memoizedCheckFavorite = useMemo(() => {
		return (
			vacItems.map((vacItem: any) => {
				if (favorites.length) {
					return (
						favorites.map((favItem: any) => {
							if (favItem.id === vacItem.id) {
								console.log('true');
								return (
									<img
										src={iconFavorite}
										alt=""
										className="image"
										onClick={onFavoriteSelected} />
								)
							}
						})
					)
				}
				else {
					return (
						<img
							src={iconNoFavorite}
							alt=""
							className="image"
							onClick={onFavoriteSelected} />
					)
				}
			}
			)
		)
	}, [favorites, vacItems])

	console.log(memoizedCheckFavorite);

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

					{memoizedCheckFavorite}
					{/* <img
						// src={checkFavorite()}
						src={isFavorite ? iconFavorite : iconNoFavorite}
						alt=""
						className="image"
						onClick={onFavoriteSelected} /> */}

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
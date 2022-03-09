import React from 'react';
import './search-bar.sass';
import filterIconImg1 from '../../assets/img/Vector.png';
import filterIconImg2 from '../../assets/img/Vector2.png';
import filterIconImg3 from '../../assets/img/Vector3.png';
import filterIconImg4 from '../../assets/img/Vector4.png';
import filterIconImg5 from '../../assets/img/Vector5.png';

const SearchBar: React.FC = () => {


	return (
		<div className="filter-search">
			<div className="filters">
				<div className="filters__item">
					<div className="filters__icon">
						<img src={filterIconImg1} alt="" className="image" />
					</div>
					<input className="filters__text" type="text" placeholder="Введите город" />
				</div>
				<div className="filters__item">
					<div className="filters__icon">
						<img src={filterIconImg2} alt="" className="image" />
					</div>
					<p className="filters__title">Гибкий график</p>
					<div className="filters-popup">
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio11"
								name="filters-popup__radio1" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio11">Полный день</label>
						</div>
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio12"
								name="filters-popup__radio1" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio12">Гибкий график</label>
						</div>
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio13"
								name="filters-popup__radio1" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio13">Удаленная работа</label>
						</div>
					</div>
				</div>
				<div className="filters__item">
					<div className="filters__icon">
						<img src={filterIconImg3} alt="" className="image" />
					</div>
					<p className="filters__title">Частичная занятость</p>
					<div className="filters-popup">
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio21"
								name="filters-popup__radio2" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio21">Полная занятость</label>
						</div>
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio22"
								name="filters-popup__radio2" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio22">Частичная занятость</label>
						</div>
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio23"
								name="filters-popup__radio2" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio23">Проектная работа</label>
						</div>
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio24"
								name="filters-popup__radio2" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio24">Стажировка</label>
						</div>
					</div>
				</div>
				<div className="filters__item">
					<div className="filters__icon">
						<img src={filterIconImg4} alt="" className="image" />
					</div>
					<p className="filters__title">От 1 года до 3 лет</p>
					<div className="filters-popup">
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio31"
								name="filters-popup__radio3" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio31">Нет опыта</label>
						</div>
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio32"
								name="filters-popup__radio3" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio32">От 1 года до 3 лет</label>
						</div>
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio33"
								name="filters-popup__radio3" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio33">От 3 до 6 лет</label>
						</div>
						<div className="filters-popup__item">
							<input type="radio"
								className="filters-popup__radio"
								id="filters-popup__radio34"
								name="filters-popup__radio3" />
							<label className="filters-popup__label"
								htmlFor="filters-popup__radio34">Более 6 лет</label>
						</div>
					</div>
				</div>
				<div className="filters__item">
					<div className="filters__icon">
						<img src={filterIconImg5} alt="" className="image" />
					</div>
					<input className="filters__text w63px" type="number" placeholder="З/П" />
					<label className="filters__label "> руб.</label>
				</div>
			</div>
			<div className="search">Поиск</div>
		</div>
	)
}


export default SearchBar;
import React, { useState, useRef, useEffect } from 'react';
import useLatest from "use-latest";
import './search-bar.sass';
import filterIconImg1 from '../../assets/img/Vector.png';
import filterIconImg2 from '../../assets/img/Vector2.png';
import filterIconImg3 from '../../assets/img/Vector3.png';
import filterIconImg4 from '../../assets/img/Vector4.png';
import filterIconImg5 from '../../assets/img/Vector5.png';

const SearchBar: React.FC = () => {

	const [schedule, setSchedule] = useState(false);
	const [type, setType] = useState(false);
	const [skill, setSkill] = useState(false);

	const popupRef = useRef<HTMLInputElement>(null)
	const onClose = () => {
		setSchedule(false);
		setType(false);
		setSkill(false);
	}

	const useOutsideClick = (
		elementRef: any,
		handler: any,
		attached = true) => {
		const latestHandler = useLatest(handler);

		useEffect(() => {
			if (!attached) return;

			const handlePopupClick = (e: any) => {
				if (!elementRef.current) return;
				if (!elementRef.current.contains(e.target)) {
					latestHandler.current();
				}
			};

			document.addEventListener("click", handlePopupClick);

			return () => {
				document.removeEventListener("click", handlePopupClick);
			};
		}, [elementRef, latestHandler, attached]);
	}

	useOutsideClick(popupRef, onClose, schedule);
	useOutsideClick(popupRef, onClose, type);
	useOutsideClick(popupRef, onClose, skill);

	const popupSchedule = () => {
		return (
			<div className="filters-popup" ref={popupRef}>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox11"
						name="filters-popup__checkbox1" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox11">Полный день</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox12"
						name="filters-popup__checkbox1" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox12">Гибкий график</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox13"
						name="filters-popup__checkbox1" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox13">Удаленная работа</label>
				</div>
			</div>
		)
	}

	const popupType = () => {
		return (
			<div className="filters-popup" ref={popupRef}>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox21"
						name="filters-popup__checkbox2" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox21">Полная занятость</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox22"
						name="filters-popup__checkbox2" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox22">Частичная занятость</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox23"
						name="filters-popup__checkbox2" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox23">Проектная работа</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox24"
						name="filters-popup__checkbox2" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox24">Стажировка</label>
				</div>
			</div>
		)
	}

	const popupSkill = () => {
		return (
			<div className="filters-popup" ref={popupRef}>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox31"
						name="filters-popup__checkbox3" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox31">Нет опыта</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox32"
						name="filters-popup__checkbox3" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox32">От 1 года до 3 лет</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox33"
						name="filters-popup__checkbox3" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox33">От 3 до 6 лет</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__checkbox"
						id="filters-popup__checkbox34"
						name="filters-popup__checkbox3" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__checkbox34">Более 6 лет</label>
				</div>
			</div>
		)
	}

	return (
		<div className="filter-search">
			<div className="filters">
				<div className="filters__item">
					<div className="filters__icon">
						<img src={filterIconImg1} alt="" className="image" />
					</div>
					<input className="filters__text" type="text" placeholder="Введите город" />
				</div>
				<div className="filters__item"
					onClick={() => setSchedule(true)}>
					<div className="filters__icon">
						<img src={filterIconImg2} alt="" className="image" />
					</div>
					<p className="filters__title">Гибкий график</p>
					{(schedule) ? popupSchedule() : null}
				</div>
				<div className="filters__item"
					onClick={() => setType(true)}>
					<div className="filters__icon">
						<img src={filterIconImg3} alt="" className="image" />
					</div>
					<p className="filters__title">Частичная занятость</p>
					{(type) ? popupType() : null}
				</div>
				<div className="filters__item"
					onClick={() => setSkill(true)}>
					<div className="filters__icon">
						<img src={filterIconImg4} alt="" className="image" />
					</div>
					<p className="filters__title">От 1 года до 3 лет</p>
					{(skill) ? popupSkill() : null}
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
		</div >
	)
}


export default SearchBar;
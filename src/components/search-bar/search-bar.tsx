import React, { useState, useRef, useEffect } from 'react';
import useLatest from "use-latest";
import './search-bar.sass';
import filterIconImg1 from '../../assets/img/Vector.png';
import filterIconImg2 from '../../assets/img/Vector2.png';
import filterIconImg3 from '../../assets/img/Vector3.png';
import filterIconImg4 from '../../assets/img/Vector4.png';
import filterIconImg5 from '../../assets/img/Vector5.png';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { actionFilterSchedule } from '../../actions/filters';

const SearchBar: React.FC = () => {
	const dispatch = useDispatch();
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
						className="filters-popup__schedule"
						id="filters-popup__schedule11"
						name="Полный день" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__schedule11">Полный день</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__schedule"
						id="filters-popup__schedule12"
						name="Гибкий график" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__schedule12">Гибкий график</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__schedule"
						id="filters-popup__schedule13"
						name="Удаленная работа" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__schedule13">Удаленная работа</label>
				</div>
			</div>
		)
	}

	const popupEmployment = () => {
		return (
			<div className="filters-popup" ref={popupRef}>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__employment"
						id="filters-popup__employment21"
						name="filters-popup__employment2" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__employment21">Полная занятость</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__employment"
						id="filters-popup__employment22"
						name="filters-popup__employment2" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__employment22">Частичная занятость</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__employment"
						id="filters-popup__employment23"
						name="filters-popup__employment2" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__employment23">Проектная работа</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__employment"
						id="filters-popup__employment24"
						name="filters-popup__employment2" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__employment24">Стажировка</label>
				</div>
			</div>
		)
	}

	const popupExperience = () => {
		return (
			<div className="filters-popup" ref={popupRef}>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__experience"
						id="filters-popup__experience31"
						name="filters-popup__experience3" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__experience31">Нет опыта</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__experience"
						id="filters-popup__experience32"
						name="filters-popup__experience3" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__experience32">От 1 года до 3 лет</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__experience"
						id="filters-popup__experience33"
						name="filters-popup__experience3" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__experience33">От 3 до 6 лет</label>
				</div>
				<div className="filters-popup__item">
					<input type="checkbox"
						className="filters-popup__experience"
						id="filters-popup__experience34"
						name="filters-popup__experience3" />
					<label className="filters-popup__label"
						htmlFor="filters-popup__experience34">Более 6 лет</label>
				</div>
			</div>
		)
	}

	const searchButton = () => {
		let arrSchedule: string[] = [];
		let scheduleChecked = document.querySelectorAll('.filters-popup__schedule:checked')
		scheduleChecked as unknown as HTMLInputElement
		scheduleChecked.forEach((el: any) => {
			arrSchedule.push(el.name)
		})
		dispatch(actionFilterSchedule(arrSchedule))
	}


	// console.log(filter)

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
					{(type) ? popupEmployment() : null}
				</div>
				<div className="filters__item"
					onClick={() => setSkill(true)}>
					<div className="filters__icon">
						<img src={filterIconImg4} alt="" className="image" />
					</div>
					<p className="filters__title">От 1 года до 3 лет</p>
					{(skill) ? popupExperience() : null}
				</div>
				<div className="filters__item">
					<div className="filters__icon">
						<img src={filterIconImg5} alt="" className="image" />
					</div>
					<input className="filters__text w63px" type="number" placeholder="З/П" />
					<label className="filters__label "> руб.</label>
				</div>
			</div>
			<div className="search"
				onClick={searchButton}>Поиск</div>
		</div >
	)
}


export default SearchBar;
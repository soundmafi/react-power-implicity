import './styles.scss';

const Nav = () => {
	return (
		<div className="nav">
			<a href="" className="nav__logo">
				<img className="nav__picture" src="../public/img/app_logo.png" alt="logo" />
			</a>
			<ul className="nav__list">
				<li className="nav__item">
					<a href="#">Features</a>
				</li>
				<li className="nav__item">
					<a href="#">Partners</a>
				</li>
				<li className="nav__item">
					<a href="#">Stories</a>
				</li>
			</ul>
			<button className="nav__btn" type='button'>Download for free</button>
		</div>
	);
};

export default Nav;

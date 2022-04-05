import './styles.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="header__slider">
				<h1 className="header__title">The Power of Simplicity</h1>
				<p className="header__text">
					Instead of spending time searching for the right app, our AI will bring the
					right app to you.
				</p>
				<a href="#" className="header__btn">Learn</a>
				<div className="header__controls">
					<div className="header__dot"></div>
					<div className="header__dot"></div>
					<div className="header__dot header__dot--active"></div>
					<div className="header__dot"></div>
					<div className="header__dot"></div>
				</div>
			</div>
		</div>
	);
};

export default Header;

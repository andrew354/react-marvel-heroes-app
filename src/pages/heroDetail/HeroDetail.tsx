import './heroDetail.scss';
import { useParams } from 'react-router-dom';
import { useGetHeroById } from '../../hooks/useGetHero/useGetHero';
import HeroDetailInfo from './components/HeroDetailInfo/HeroDetailInfo';
import Spinner from '../../components/Spinner/Spinner';

const HeroDetail = () => {
	const { id } = useParams();
	const heroId = Number(id);
	const { data, isLoading } = useGetHeroById(heroId);

	return (
		<>
			{isLoading && !data ? (
				<div className="spinner">
					<Spinner />
				</div>
			) : (
				<HeroDetailInfo hero={data[0]} isLoading={isLoading} />
			)}
		</>
	);
};

export default HeroDetail;

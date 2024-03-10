import './heroDetailComicsList.scss';
import { useGetComicsByHero } from '../../../../hooks/useGetComics/useGetComics';
import { useParams } from 'react-router-dom';
import Spinner from '../../../../components/Spinner/Spinner';

const HeroDetailComicsList = () => {
	const { id } = useParams();
	const { comics, isLoading } = useGetComicsByHero(Number(id));

	return (
		<div className="heroDetailComicsList_container">
			<h1>Comics</h1>
			{isLoading ? (
				<div className="spinner">
					<Spinner />
				</div>
			) : (
				<>
					<div className="comics_container">
						{comics.length === 0 ? (
							<p>No comics to display</p>
						) : (
							comics.map((comic) => (
								<div key={comic.id} className="comics_card">
									<img
										src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
										alt="comicThumbnail"
									/>
									<p>{comic.title}</p>
									<p>{comic.year}</p>
								</div>
							))
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default HeroDetailComicsList;

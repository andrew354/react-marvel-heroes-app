import './landing.scss';
import { useState } from 'react';
import ListHeroes from '../../components/ListHeroes/ListHeroes';
import { useHeroesContext } from '../../providers/HeroesProvider';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useGetHeroe } from '../../hooks/useGetHero/useGetHero';
import Spinner from '../../components/Spinner/Spinner';

const Landing = () => {
	const { heroes, isLoading } = useHeroesContext();
	const [search, setSearch] = useState('');
	const { data, isLoading: isLoadingHero } = useGetHeroe(search);

	return (
		<div className="landing_container">
			<SearchBar value={search} setValue={setSearch} />
			{isLoading || isLoadingHero ? (
				<div className="spinner">
					<Spinner />
				</div>
			) : (
				<>
					{
						<ListHeroes
							heroBaseURL="heroes"
							filteredHeroes={!data ? heroes : data}
						/>
					}
				</>
			)}
		</div>
	);
};

export default Landing;

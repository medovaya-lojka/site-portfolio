import { useState } from 'react';
import { LangContainer, LangListItem } from './styles';

function Lang() {
	const [listView, setListView] = useState<boolean>(false);
	const languages: string[] = [
		'EN',
		'RU',
		'FR',
		'DE'
	];
	const [curLang, setCurLang] = useState<number>(0);
	return (
	<>
		<LangContainer>
			{listView && 
				<div>
					{languages.map((name: string, index: number) => 
						curLang !== index && (
							<LangListItem 
								id={'langItem-' + index} 
								onClick={() => {
									setCurLang(index); 
									setListView(!listView)
								}
							}>
								{name}
							</LangListItem>
						))
					}
				</div>}
			<LangListItem onClick={() => setListView(!listView)}>
				{languages[curLang]}
			</LangListItem>
		</LangContainer>
	</>
	)
}
	
export default Lang
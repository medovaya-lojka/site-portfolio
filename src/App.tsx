import './App.css';
import { useState } from 'react';
import Menu from './components/menu/Menu';
import Lang from './components/lang/Lang';
import { HomeContainer } from './styles';
import { createGlobalStyle } from 'styled-components';

// export function rk(word) {
// 	const dict = {
// 		ru: {
// 			'ENG': 'АНГЛ',
// 			'VIDEO': 'ВИДЕО'
// 		},
// 		fr: {
// 			'ENG': 'ангюсик',
// 			'VIDEO': 'видио'
// 		}
// 	}
// }


const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'NikitaFont';
    src: url('/fonts/NikitaFont.ttf') format('truetype'); /* Safari, Android, iOS */
  }
`;

function App() {
	const [page, setPage] = useState(0);
	const headers: string[] = [
		'HOME',
		'PHOTO',
		'VIDEO',
		'DESIGN',
		'CONTACT'
	];

	return (
		<>
			<FontStyle/>
			<Menu setPage={setPage} headers={headers}></Menu>
			{
				page === 0 && (<HomeContainer>
					<Lang></Lang>
				</HomeContainer>)
			}
			{
				page === 1 && (
					<></>
				)
			}
			
			{/* <div style={{"height" : "100px"}}>
				<text style={{"fontSize": "36px", "bottom" : "1px", "padding" : "100px", "color" : "white"}}>Хуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпиздаХуй пизда хуйпизда</text>
			</div> */}
		
		</>
	)
}

export default App

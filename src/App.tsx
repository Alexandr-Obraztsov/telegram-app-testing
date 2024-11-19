import ChatIcon from '@mui/icons-material/Chat'
import SearchIcon from '@mui/icons-material/Search'
import StarIcon from '@mui/icons-material/Star'
import {
	Avatar,
	Cell,
	Input,
	List,
	Section,
	Tabbar,
} from '@telegram-apps/telegram-ui'
import { useState } from 'react'
import { colors } from './tg'

const tabs = [
	{
		id: 1,
		text: 'Поиск',
		Icon: () => <SearchIcon />,
	},
	{
		id: 2,
		text: 'Подписки',
		Icon: () => <ChatIcon />,
	},
	{
		id: 3,
		text: 'Избранное',
		Icon: () => <StarIcon />,
	},
]

function App() {
	const [currentTab, setCurrentTab] = useState<number>(0)

	return (
		<List
			style={{
				background: colors.secondary_bg_color,
				height: '100px',
			}}
		>
			<Input header='Поиск' size={20} />

			<Section header='Каналы'>
				<Cell before={<Avatar size={40} />} description='@channel1'>
					Дайджест 1
				</Cell>
				<Cell before={<Avatar size={40} />} description='@channel2'>
					Дайджест 2
				</Cell>
			</Section>
			<Tabbar>
				{tabs.map(({ id, text, Icon }) => (
					<Tabbar.Item
						key={id}
						text={text}
						selected={id === currentTab}
						onClick={() => setCurrentTab(id)}
					>
						<Icon />
					</Tabbar.Item>
				))}
			</Tabbar>
		</List>
	)
}

export default App

import styled from "styled-components"
import useAppStore from "./store/useAppStore"

const App = () => {
	const {count,increment} = useAppStore()

	return (
		<Container className="center-align">
			<span className="count">{count}</span>
			<button
				onClick={()=> increment(1)}
			>
				Increment
			</button>
		</Container>
	)
}

export default App

const Container = styled.div`

`
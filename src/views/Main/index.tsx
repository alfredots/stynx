import { useAxios } from 'hooks/useAxios'
import { Box } from 'components/Box'
import { Typography } from 'components/Typography'

export const Main = () => {
  const { response, loading, error } = useAxios({
    url: 'https://dog.ceo/api/breeds/image/random',
    method: 'get'
  })
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Deu ruim!</div>
  }

  // const imageUrl = response.message
  return (
    <Box
      bgColor="primary-50"
      sizing={{ width: '100px', height: '100px' }}
      sm={{
        bgColor: 'secondary-500',
        sizing: {
          width: '300px',
          height: '300px'
        }
      }}
      lg={{
        sizing: {
          width: '400px',
          height: '500px'
        }
      }}
    >
      {/* <img src={imageUrl} alt="avatar" width={400} height="auto" /> */}
      <h1>TESTE teste</h1>

      <Typography
        color="white"
        variant="body-lg"
        weight="400"
        as="h2"
        sm={{ color: 'black', variant: 'body-xs', weight: '700' }}
      >
        Teste2 teste
      </Typography>
    </Box>
  )
}

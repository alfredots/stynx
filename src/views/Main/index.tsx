import { useAxios } from '@hooks/useAxios'

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

  const imageUrl = response.message
  return (
    <div>
      <img src={imageUrl} alt="avatar" width={400} height="auto" />
    </div>
  )
}

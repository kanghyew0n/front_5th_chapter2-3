export const getUser = () => {
  try {
    const res = fetch("/api/users?limit=0&select=username,image")
      .then((response) => response.json())
      .then((data) => data.user)
    return res
  } catch (error) {
    console.log(error)
  }
}

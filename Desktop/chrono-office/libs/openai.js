
export const openai = async (userText) => {
    const response = await fetch("/api/openai/route", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify({userText}),
      })
      const {message} = await response.json()
      console.log(message)

      return message
}

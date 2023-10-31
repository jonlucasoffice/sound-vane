export async function getAQ(lng: number, lat: number) {
  const response = await fetch(
    `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${process.env.AQI_TOKEN}`
  )
  const res = await response.json()

  if (!response.ok) {
    console.error("Something went wrong with request to node server!")
    return response
  } else {
    let aq: any = {}
    aq["o3"] = res.data.iaqi.o3 ? res.data.iaqi.o3.v : null
    aq["humidity"] = res.data.iaqi.h ? res.data.iaqi.h.v : null
    aq["co"] = res.data.iaqi.co ? res.data.iaqi.co.v : null
    aq["pm25"] = res.data.iaqi.pm25 ? res.data.iaqi.pm25.v : null
    aq["location"] = res.data
    return aq
  }
}

export async function postApi(data, url) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    if (res.ok) {
      return resData;
    } else {
      console.log(resData);
      alert(resData.errors[0].message);
    }
  } catch (error) {
    alert(error);
  }
}

export async function getProfile(url, token) {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const resData = await res.json();
    if (res.ok) {
      return resData;
    } else {
      //   console.log(resData);
      alert(resData.errors[0].message);
    }
  } catch (error) {
    alert(error);
  }
}

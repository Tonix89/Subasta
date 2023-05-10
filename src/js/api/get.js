export async function getApi(url) {
  try {
    const res = await fetch(url);
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

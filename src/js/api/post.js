export async function postApi(data, url) {
  try {
    const res = await fetch(url, data);
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

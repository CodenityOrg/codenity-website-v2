import { PreHome } from "@/components/PreHome";

async function loadStoicQuote() {
  const res = await fetch("https://stoic.tekloon.net/stoic-quote");
  const data = await res.json();
  return data.data;
}
async function PreHomePage() {
  const data = await loadStoicQuote();
  // console.log(data);
  return (
    <>
      <PreHome fecha={"09/05/2024 23:59"} dataFrase={data} />
    </>
  );
}

export default PreHomePage;

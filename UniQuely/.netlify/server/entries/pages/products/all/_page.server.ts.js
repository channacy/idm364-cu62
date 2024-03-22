import { s as supabase } from "../../../../chunks/supabaseClient.js";
async function load({ params }) {
  const { data } = await supabase.from("items").select();
  console.log(data);
  return {
    item: data ?? []
  };
}
export {
  load
};

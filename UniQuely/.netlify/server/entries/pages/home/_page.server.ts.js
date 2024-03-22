import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data } = await supabase.from("items").select();
  console.log(data);
  return {
    items: data ?? []
  };
}
export {
  load
};

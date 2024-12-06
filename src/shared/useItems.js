import { ref } from "vue";
import axios from "axios";
// import { configDotenv } from "dotenv";

export function useItems() {


    // Denna variabel håller våra Items från databasen
    // Kan användas globalt för att se den data som finns.
    const items = ref(null);

    // Denna funktion hämtar från databasen och placerar resultatet i items-variabeln
    // Kllas på för att uppdatera items- variabeln
    const getItems = async () => {
        try {
            const response = await axios.get('https://api.jsonbin.io/v3/b/6751aef2e41b4d34e46057f5', {
                headers: {
                    'X-Master-Key': import.meta.env.VITE_API_X_MASTER_KEY,
                    'Content-Type': 'application/json'
                }
            });
            items.value = response.data.record.items;
        } catch (error) {
            console.error("Fel vid hämtning av data med Axios:", error);
        }
    };

    return {
        items,
        getItems,
    };
}
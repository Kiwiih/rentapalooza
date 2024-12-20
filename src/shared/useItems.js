import { ref } from 'vue'
import axios from 'axios'

// Denna variabel håller våra Items från databasen
// Kan användas globalt för att se den data som finns.
const items = ref([])

export function useItems() {
  // Denna funktion hämtar från databasen och placerar resultatet i items-variabeln
  // Kllas på för att uppdatera items- variabeln
  const getItems = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_ITEMS_URL, {
        headers: {
          'X-Master-Key': import.meta.env.VITE_API_X_MASTER_KEY,
          'Content-Type': 'application/json'
        }
      })
      items.value = response.data.record.items
    } catch (error) {
      console.error('Fel vid hämtning av data med Axios:', error)
    }
    console.log('GET ITEMS -hämtning genomförd')
  }

  const updateItems = async (updatedItems) => {
    try {
      await axios.put(
        import.meta.env.VITE_API_ITEMS_URL,
        { items: updatedItems },
        {
          headers: {
            'X-Master-Key': import.meta.env.VITE_API_X_MASTER_KEY,
            'Content-Type': 'application/json'
          }
        }
      )
      items.value = updatedItems
    } catch (error) {
      console.error(error)
    }
  }

  return {
    items,
    getItems,
    updateItems
  }
}

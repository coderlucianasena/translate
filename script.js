const textInput = document.getElementById("text-input");
const translationResult = document.getElementById("translation-result");
const translatedText = document.getElementById("translated-text");

function translateText() {
    const text = textInput.value.trim();

    if (text === "") {
        alert("Por favor, insira um texto para traduzir.");
        return;
    }

    // Chame a função de tradução
    translateTextWithAI(text);
}

// Função de tradução de texto por IA
async function translateTextWithAI(text) {
    try {
        // Importe a biblioteca "Translate" para Python
        const response = await fetch(`/translate?text=${encodeURIComponent(text)}`);
        const data = await response.json();

        if (data.translatedText) {
            translationResult.classList.remove("hidden");
            translatedText.textContent = data.translatedText;
        } else {
            alert("Não foi possível traduzir o texto.");
        }
    } catch (error) {
        console.error("Erro ao traduzir o texto:", error);
        alert("Ocorreu um erro ao traduzir o texto. Por favor, tente novamente.");
    }
}

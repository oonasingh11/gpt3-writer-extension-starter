const generateCompletionAction = async (info) => {
  try {
    const { selectionText } = info;
    const basePromptPrefix = `
	Write me a song in the style of Taylor Swift

	Song Title:
	`;
  const baseCompletion = await generate(`${basePromptPrefix}${selectionText}`);
  } catch (error) {
    console.log(error);
  }
};
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'context-run',
    title: 'Generate T Swift song',
    contexts: ['selection'],
  });
});
chrome.contextMenus.onClicked.addListener(generateCompletionAction);

const getKey = () => {

}

const generate = async (prompt) => {
  // Get your API key from storage
  const key = await getKey();
  const url = 'https://api.openai.com/v1/completions';

  // Call completions endpoint
  const completionResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 1250,
      temperature: 0.7,
    }),
  });
}

  // Select the top choice and send back
const completion = await completionResponse.json();
return completion.choices.pop();

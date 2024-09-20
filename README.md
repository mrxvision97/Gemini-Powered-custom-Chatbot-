# Pro Chatbot with Gemini AI

This project implements an interactive chatbot interface using Flask and the Gemini AI model from Google. It features a sleek UI with a video background, sound effects, and speech recognition capabilities.

## Features

- Interactive chat interface with Gemini AI integration
- Full-screen video background
- Sound effects for bot responses
- Speech recognition for voice input
- Responsive design
- Mute/unmute functionality for sound effects

## Prerequisites

- Python 3.7+
- Flask
- Google Generative AI library
- A Gemini API key from Google

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pro-chatbot-gemini.git
   cd pro-chatbot-gemini
   ```

2. Set up a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Set up your Gemini API key:
   - Obtain an API key from the Google AI Studio
   - Replace 'YOUR_API_KEY' in app.py with your actual API key

## Project Structure

```
project/
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── img/
│   │   └── bot-avatar.png
│   ├── video/
│   │   └── background.mp4
│   └── audio/
│       └── message-tone.mp3
├── templates/
│   └── index.html
├── app.py
├── requirements.txt
└── README.md
```

## Usage

1. Run the Flask application:
   ```
   python app.py
   ```

2. Open a web browser and navigate to `http://localhost:5000`

3. Start chatting with the AI!

## Customization

- Replace `background.mp4` in the `static/video/` directory with your preferred background video
- Modify `style.css` to change the appearance of the chat interface
- Adjust `script.js` to alter the behavior of the chat application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Google for the Gemini AI model
- Flask team for the excellent web framework
- Font Awesome for the icons used in the interface

## Disclaimer

This project is for educational purposes only. Ensure you comply with Google's terms of service when using the Gemini AI model.

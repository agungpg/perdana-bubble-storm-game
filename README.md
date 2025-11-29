# Bubble Storm Game

Arcade-style click/tap game where colored bubbles fall from the top of the screen. Pop them before they hit the ground, keep your lives, and chase a high score with punchy sound effects.

Play instantly: https://agungpg.github.io/perdana-bubble-storm-game/

## How to Play
- Press **START** to begin; **PAUSE**, **CONTINUE**, and **STOP** control the session.
- Tap or click any falling bubble to pop it and earn points.
- Special bubbles:
  - **Outlined bubble** (same-color border) clears all bubbles of that color.
  - **Glowing gold bubble** clears every bubble on screen.
- Each bubble that reaches the bottom costs one heart. Lose all hearts and the game ends.
- Background music loops during play; sound effects fire on pops and explosions.

## Running Locally
1. Install dependencies: `npm install`
2. Build assets: `npm run build`
3. Open `dist/index.html` in your browser to play the latest build.

## Tech Notes
- Built with vanilla JS, CSS, and Web Animations; bundled by Webpack.
- Assets (audio, icons) are imported so Webpack emits them to `dist/`.
- Background music must be triggered by a user action (browser autoplay rules), so it starts once you press **START** or **CONTINUE**.

## Project Structure
- `src/index.js` — game logic, animations, audio hooks.
- `src/styles.css` — layout and particle visuals.
- `src/assets/` — audio files and heart icon.
- `webpack.config.js` — bundling rules and HTML template output.

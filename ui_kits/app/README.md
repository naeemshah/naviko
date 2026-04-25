# Naviko App UI Kit

## Overview
High-fidelity interactive recreation of the Naviko mobile app.
The core product flow: Checklist → Upload → Verify → Green Light.

## Screens
- `index.html` — Full app prototype with all 4 screens, click-through navigation

## Components
- `AppNav.jsx` — Mobile top nav with progress indicator
- `Checklist.jsx` — Visa selection + dynamic document checklist
- `Upload.jsx` — Document upload zone with drag/drop + AI scan states
- `GreenLight.jsx` — The signature moment: animated green light confirmation

## Design notes
- Designed at 390px (iPhone 14) width
- Dark-mode native throughout
- Fonts: DM Sans + DM Mono
- Teal (#1D9E75) = success/pass; Purple (#7F77DD) = AI processing/accent

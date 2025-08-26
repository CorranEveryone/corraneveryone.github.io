# Just a Clicker Game Changelogs

## v1.0 [Unreleased]

### **Complete Shop Filters Update** v1.0.0.12 [Aug 26, 2026]
#### Finished
- Shop Filters
    - Points/Click
    - Points/s

### **Incomplete Shop Filters Update** v1.0.0.11 [Aug 25, 2025]
#### Started
- Shop Filters (Don't Work Just Yet.)
    - Points/Click
    - Points/s
#### Added
- CSS Classes
    - trueToggle
    - falseToggle
#### Changed
    - CSS class `shopitem` was changed to `boxed`

### **Tier 3 Expansion Update** v1.0.0.10 [Aug 22, 2025]
#### Added
- Shop
    - Polish Button (200 Points/s)
    - Automanic Button Presser MkIII (600 Points/Click)
#### Changed
- Changed the border color of shop items from `white` to `gray`

### **The Formating Update** v1.0.0.9 [Apr 25, 2025]
#### Added
- Number formater (turns numbers like `904889571` into `904.8m`)

### **The Statistical Update** v1.0.0.8 [Apr 24, 2025]
#### Added
- Stats
    - New feature, now including the following:
        - Total Points (Will be tracked from this version on)
        - Most Points (Will be tracked from this version on)
        - Items Bought (Will be tracked from this version on)
        - First Version Played
- Settings header

### **The Expansion Update** v1.0.0.7 [Apr 23, 2025]
#### Added
- Autosaving every minute
- Seperate variable for the cost increase of items being bought called `inflation`
- Shop
    - Added Polish Button (Shows when you have 10+ Points/s)
    - Added Automanic Button Clicker MkII (Shows when you have 60+ Points/Click)
#### Changed
- Simplified Saving and Loading Code
- Change `inflation` from 10% to 7.5%
#### Fixes
- Fixed `Upgrade Button` from having the cost of the `Automanic Button Clicker`
- Fixed `Automanic Button Clicker` from defaulting to the default cost

### **The Deleting Update** v1.0.0.6 [Apr 21, 2025]
#### Added
- Added a way to delete your save data
#### Changed
- Smoothened the `Points/s` gain from once a second to 100 times per second.

### **The Automation Update** v1.0.0.5 [Apr 17, 2025]
#### Added
- Shop
    - Automanic Button Clicker (Shows when you have 5+ Points/Click)
#### Changed
- Changed `ppc` and `Points Per Click` to `Points/Click`
- Changed `pps` and `Points Per Second` to `Points/s`

### *fixes* v1.0.0.4 [Apr 17, 2025]
#### Fixes
- Fixed a bug where you cannot load a new save because it tries to load a blank save. This was causing the `Points: NaN` issue.

### **The Saving Update** v1.0.0.3 [Apr 15, 2025] 
#### Added
- Added saving
- Gives Points/s points every second (There are no upgrades for it at the moment)
#### Changed
- Version number is now handled by JavaScript variables
- Shop
    - Made the Button Upgrade show up when you can afford it.
- CSS
    - Changed the Button's padding

### **The Shop Update** v1.0.0.2 [Apr 12, 2025] 
#### Added
- Shop
    - Upgrade Button

### **The Not an Update** v1.0.0.1 [Apr 11, 2025] 
Initial release, so far just features a button that increases points

## Explanation of Version Numbers
Example: v1.2.3.4
- The v1 means that I have made this this many times. 1 means I have only made this once. 2 would mean I have rewritten this from scratch.
- The v1.2 means major releases, this means new content has been added, and a lot of it.
- The v1.2.3 means minor releases, usually just being bug fixes.
- The v1.2.3.4 means beta releases, the first three numbers are what version the beta release is leading up to.
<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the homepage as a single semantic route with reusable section controls and content data in a browser-safe module, so the design remains simple to reproduce in Elementor.
- Keep all visual values in the central stylesheet and use Button variants for controls, so brand styling is consistent.
- Missing booking/review content must be visibly pending rather than simulated, so visitors are never shown false confirmations or invented endorsements.
- Homepage building blocks (SectionHeader, CtaBlock, CaseCard, RotatingBadge, ShortcodeBlock, FaqItem, CheckList, SmileMark, SmileCircles) live in one shared components module and reuse the fixed q-* class set, so they map 1:1 to Elementor Components and global Classes.
- Design values are exposed as --q-* CSS variables and documented on the unlinked /styleguide route, which serves as the Elementor build blueprint.

- Keep heading line splits in browser-safe content data and render outlined/filled typography through SectionHeader, so Elementor reproduces the same line breaks.
- Apply section surfaces with q-panel wrappers and shared radius tokens, grouping the hero, benefits and statistics into one panel; isolate and clip SmileCircles behind section content, so the signature shape and decorations stay contained.

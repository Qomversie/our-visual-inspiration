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
- Homepage building blocks, including LogoStrip and ResultCards, live in one shared components module and reuse the fixed Dutch class set (no prefix), so they map 1:1 to Elementor Components and global Classes.
- Design values are exposed as Dutch-named CSS variables (--kleur-*, --tekst-*, --afronding-*, --ruimte-*) and documented on the unlinked /styleguide route, which serves as the Elementor build blueprint.

- Headings render via SectionHeader using content-data line splits; ResultCards owns its isolated two-line heading exception, so its treatment cannot affect other sections.
- Apply section surfaces with q-panel wrappers and shared radius tokens; keep hero benefits, LogoStrip and ResultCards separate, and split SmileOutline into identical rear and clipped front SVG layers around photos, so it weaves without changing the logo path or blocking controls.
- Count-up figures render final values for SSR and accessible labels, then animate once through IntersectionObserver with reduced-motion opt-out, so values remain readable without animation.
- Keep the inactive Workflow component available only in the styleguide, so it can be restored without duplicating its content or layout.

- ResultCards owns its video lightbox and one-card-step slider, deriving each media variant from the shared results data, so homepage and styleguide behave identically.
- SiteFooter lives in the shared components module, so homepage and styleguide render the same footer.

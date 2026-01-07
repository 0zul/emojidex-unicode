# Contributing

Thanks for your interest in contributing to **emojidex-unicode**.

This project is currently developed for local and internal use, but contributions
are welcome once the public API stabilizes.

---

## 📋 Guidelines

- Keep changes Unicode-accurate
- Do not introduce runtime dependencies without discussion
- Prefer build-time data generation over runtime logic
- Keep APIs deterministic and predictable

---

## 🧪 Data Changes

If you modify emoji parsing or metadata:

1. Update the parser scripts in `scripts/`
2. Regenerate the dataset
3. Validate that no emojis are lost or duplicated
4. Update `CHANGELOG.md` accordingly

---

## 🧠 Design Principles

- Unicode is the source of truth
- No scraping HTML pages
- No mutation of dataset at runtime
- Performance matters (indexes over filters)

---

## 📄 License

By contributing, you agree that your contributions will be licensed
under the MIT License.

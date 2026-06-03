# Git LFS Asset Audit
Git LFS is available in the Codex environment and was configured for binary assets in the rebuilt website. No PDFs, images, icons, fonts, catalogs, or downloadable assets were removed.
## Binary assets found in `02-new-rebuild`
| Path | Size | Over 50MB | Over 100MB | LFS tracked |
| --- | ---: | :---: | :---: | :---: |
| `02-new-rebuild/public/downloads/brass-nrv.pdf` | 115,825 bytes (0.110 MiB) | No | No | Yes |
| `02-new-rebuild/public/downloads/royal-engitech-catalog.pdf` | 997,532 bytes (0.951 MiB) | No | No | Yes |
| `02-new-rebuild/public/downloads/royal-engitech-iso-certificate-2024.pdf` | 140,187 bytes (0.134 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/cnc-workshop.jpg` | 113,438 bytes (0.108 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/export-engineering.jpg` | 183,254 bytes (0.175 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/foundry-capability.jpg` | 137,674 bytes (0.131 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/industrial-components.jpg` | 137,435 bytes (0.131 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/precision-machining.jpg` | 133,168 bytes (0.127 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/product-1.jpg` | 4,356 bytes (0.004 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/product-100.jpg` | 14,441 bytes (0.014 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/product-124.png` | 14,615 bytes (0.014 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/product-130.jpg` | 13,070 bytes (0.012 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/product-20.jpg` | 4,257 bytes (0.004 MiB) | No | No | Yes |
| `02-new-rebuild/public/images/product-60.jpg` | 5,609 bytes (0.005 MiB) | No | No | Yes |

## Size threshold summary
- Assets over 50MB: none.
- Assets over 100MB: none.

## Git LFS tracking rules
The `.gitattributes` file tracks rebuilt-site binary asset extensions with Git LFS while leaving source code and text files in normal Git.

## Local fallback commands
If Git LFS is not installed locally, run:

```bash
git lfs install
git lfs track "02-new-rebuild/**/*.pdf" "02-new-rebuild/**/*.png" "02-new-rebuild/**/*.jpg" "02-new-rebuild/**/*.jpeg" "02-new-rebuild/**/*.webp" "02-new-rebuild/**/*.gif" "02-new-rebuild/**/*.ico" "02-new-rebuild/**/*.svg" "02-new-rebuild/**/*.avif" "02-new-rebuild/**/*.woff" "02-new-rebuild/**/*.woff2" "02-new-rebuild/**/*.ttf" "02-new-rebuild/**/*.otf" "02-new-rebuild/**/*.mp4" "02-new-rebuild/**/*.mov" "02-new-rebuild/**/*.webm" "02-new-rebuild/**/*.zip"
git add .gitattributes
git add --renormalize 02-new-rebuild/public
git commit -m "Track rebuild binary assets with Git LFS"
git lfs ls-files
```

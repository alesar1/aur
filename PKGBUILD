# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

pkgname=poetry
pkgver=0.12.10
pkgrel=1
pkgdesc="Python dependency management and packaging made easy."
arch=('any')
url="https://poetry.eustace.io/"
license=('MIT')
depends=('python>=3.4')
conflicts=('python-poetry')
options=(!emptydirs)
source=(
  "https://github.com/sdispater/poetry/releases/download/${pkgver}/poetry-${pkgver}-linux.tar.gz"
  "https://github.com/sdispater/poetry/archive/${pkgver}.tar.gz"
  "poetry.py"
)
sha256sums=(
  'b15bf7834dfcdab609b9ff2e2fe7c1ae48acc9bfe8ac865e6b53bdab92ffa2a0'
  '967866041224213e8ca9050938ff2ae3853b48c359ffbe42b6100ebef2ede66f'
  'e9fee925c0fb42df53389bdfc8ebbe01bfd4f6146ed0a55786bd2ba741169c0c'
)

package() {
  cd "${srcdir}"

  rm -rf "${pkgdir}/usr/lib/poetry/poetry"

  install -d "${pkgdir}/usr/lib/poetry"
  cp -r poetry "${pkgdir}/usr/lib/poetry/poetry"

  install -Dm755 poetry.py "${pkgdir}/usr/bin/poetry"

  cd "${pkgdir}/usr/lib/poetry"

  # Tab completion for Bash
  install -d "${pkgdir}/usr/share/bash-completion/completions"
  python -B -m poetry completions bash \
    | sed '$s/\ \/.*\/pkg\/poetry\/usr\/lib\/poetry\/poetry\/__main__.py/\ \/usr\/bin\/poetry/' \
    | sed 's/__main__py/poetry/' \
    | sed 's/__main__.py/poetry/' \
    | install -Dm644 /dev/stdin "${pkgdir}/usr/share/bash-completion/completions/${pkgname}"

  # Tab completion for Zsh
  install -d "${pkgdir}/usr/share/zsh/site-functions"
  python -B -m poetry completions zsh \
    | sed '$s/\ \/.*\/pkg\/poetry\/usr\/lib\/poetry\/poetry\/__main__.py/\ \/usr\/bin\/poetry/' \
    | sed 's/__main__py/poetry/' \
    | sed 's/__main__.py/poetry/' \
    | install -Dm644 /dev/stdin "${pkgdir}/usr/share/zsh/site-functions/_${pkgname}"

  # Tab completion for Fish
  install -d "${pkgdir}/usr/share/fish/vendor_completions"
  python -B -m poetry completions fish \
    | sed 's/__main__py/poetry/' \
    | sed 's/__main__.py/poetry/' \
    | install -Dm644 /dev/stdin "${pkgdir}/usr/share/fish/vendor_completions.d/${pkgname}.fish"

  cd "${srcdir}/${pkgname}-${pkgver}"

  install -Dm644 CHANGELOG.md "${pkgdir}/usr/share/doc/${pkgname}/CHANGELOG.md"
  install -Dm644 CONTRIBUTING.md "${pkgdir}/usr/share/doc/${pkgname}/CONTRIBUTING.md"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

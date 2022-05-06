# Maintainer: NOGISAKA Sadata <ngsksdt@gmail.com>
# Contributor: Kohei Suzuki <eagletmt@gmail.com>

pkgname=ghq
pkgver=1.3.0
pkgrel=1
pkgdesc="Remote repository management made easy"
arch=('i686' 'x86_64')
url="https://github.com/x-motemen/ghq"
license=('MIT')
makedepends=('go'  'git')     # Yes, you're right; no git-depended lines in the PKGBUILD but `make test` requires git...
optdepends=('zsh: ghq function for zsh')
conflicts=('ghq-bin')
source=("https://github.com/x-motemen/${pkgname}/archive/v${pkgver}.tar.gz")

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  export GOPATH="$srcdir/build"
  go get -t -d -v
  make build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  install -Dm 755 ghq "$pkgdir/usr/bin/ghq"
  install -Dm 644 misc/bash/_ghq "$pkgdir/usr/share/bash-completion/completions/ghq"
  install -Dm 644 misc/zsh/_ghq "$pkgdir/usr/share/zsh/site-functions/_ghq"
  install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/ghq/LICENSE"
}

# vim: set et sw=2 sts=2:

sha512sums=('838ca38f0a04b498c1e620c7c4b3e759a2c96ab86db0e12911f999f4ddd41261eae03f768adf3f4b63585fddae573efa559291e78756d78a32a7a9c4fff3c731')

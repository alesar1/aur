# Maintainer: Samuel Collins <samuel.collins@live.co.uk>
# Co-Maintainer: Bradley Garrod <bradleybredgarrod@gmail.com>

pkgname=gitlab-glab-bin
pkgver=1.13.1
pkgrel=1
epoch=
pkgdesc="An open source GitLab CLI tool written in Go"
arch=(x86_64)
url="https://github.com/profclems/glab"
license=('MIT')
groups=()
depends=(glibc)
makedepends=()
checkdepends=()
optdepends=()
provides=(gitlab-glab)
conflicts=(gitlab-glab)
replaces=()
backup=()
options=()
install=
changelog=
source=("$url/releases/download/v${pkgver}/glab_${pkgver}_Linux_x86_64.tar.gz")
noextract=()
sha256sums=('46b594fa969e292ee85634afd29954542588f6694e74267dc0845010d06f2406')
validpgpkeys=()

package() {
	install -D bin/glab "${pkgdir}/usr/bin/glab"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}

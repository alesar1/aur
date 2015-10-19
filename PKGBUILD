# Maintainer: Benjamin Chrétien <chretien at lirmm dot fr>
pkgname=git-latexdiff
pkgver=1.1.2
pkgrel=1
pkgdesc="Simple but very convenient wrapper around Git and latexdiff"
arch=('any')
url="https://gitlab.com/git-latexdiff/git-latexdiff"
license=('GPL')
depends=('texlive-core' 'git')
source=("v${pkgver}.tar.gz"::"https://gitlab.com/${pkgname}/${pkgname}/repository/archive.tar.gz?ref=v${pkgver}")
sha256sums=("cc82452c29c7509fb5ec3d8e781e66c4d5c6783e5451956c14bcfde5b29959a7")

package() {
  cd `ls -d ${srcdir}/git-latexdiff-v${pkgver}-*`

  install -m 755 -D git-latexdiff ${pkgdir}/usr/bin/git-latexdiff
}
# vim:set ts=2 sw=2 et:

# Maintainer: Terje Larsen <terlar@gmail.com>
pkgname=oni
pkgver=0.2.5
pkgrel=1
pkgdesc='NeoVim front-end UI focused on IDE-like extensibility'
arch=(any)
url="https://github.com/extr0py/oni"
license=('MIT')
depends=('nodejs' 'neovim' 'gconf' 'libxss')
makedepends=('tar')
source=("https://github.com/extr0py/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz"
        "oni.sh")
sha256sums=('464c290262e986a95f137df8ba5cd1fea0f33d5e26f61cb983f714e19cea7bf4'
            '72a945d501f33cfc2fd0d8e832942ba75c09518abd2248973c4df461c3229aee')

package() {
  install -d ${pkgdir}/opt/${pkgname}
  cp -R ${srcdir}/${pkgname}-${pkgver}/* ${pkgdir}/opt/${pkgname}
  install -Dm755 $srcdir/${pkgname}.sh ${pkgdir}/usr/bin/${pkgname}
}
# vim:set ts=2 sw=2 et:

# Maintainer: Felix Springer <felixspringer149@gmail.com>

pkgname=vim-vimtex
_pkgname=vimtex
pkgver=2.10
pkgrel=1
pkgdesc='A modern Vim and neovim filetype plugin for LaTeX files'
arch=('any')
url="https://github.com/lervag/${_pkgname}"
license=('MIT')
depends=('vim')
makedepends=()
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('e7b522686767e74c4c2bdd464e294eb74312f592804f8cb94fbf670d9df8f973')

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  local _installpath="${pkgdir}/usr/share/vim/vimfiles"
  install -dvm755 "${_installpath}"
  cp -rvt "${_installpath}" after autoload compiler doc ftdetect ftplugin indent plugin rplugin syntax
  install -Dm644 LICENSE.md "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

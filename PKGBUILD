# Maintainer: Brenden Hoffman <hbrenden@fastmail.com>

pkgname=fzf-tab-git
_pkgname=fzf-tab
pkgver=r196.bc086fc
pkgrel=1
pkgdesc="Replace zsh's default completion selection menu with fzf (git version)"
url='https://github.com/Aloxaf/fzf-tab'
arch=('any')
license=('MIT')
depends=('zsh' 'fzf')
makedepends=('git')
source=("git+https://github.com/Aloxaf/fzf-tab.git")
sha512sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd $srcdir/$_pkgname
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -dm 755 "${pkgdir}/usr/share/zsh/plugins/${pkgname}"
  cp -dr --no-preserve=ownership {fzf-tab.zsh,fzf-tab.plugin.zsh} \
    "${pkgdir}/usr/share/zsh/plugins/${pkgname}"
}

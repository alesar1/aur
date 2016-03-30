# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>
# Contributor: Andreas Wagner <AndreasBWagner@pointfree.net>

pkgname=vim-vimwiki-dev-git
pkgver=2.2.1.r24.g722d6e4
pkgrel=1
pkgdesc='A personal wiki for Vim; dev branch'
arch=('any')
url='https://github.com/vimwiki/vimwiki'
license=('MIT')
groups=('vim-plugins')
depends=('vim')
makedepends=('git')
conflicts=('vim-vimwiki')
provides=('vim-vimwiki')
install=vimdoc.install
source=('git+https://github.com/vimwiki/vimwiki.git#branch=dev')
sha256sums=('SKIP')

pkgver() {
	cd vimwiki
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  # Extract licence from vim's help
  grep '^[0-9]*. License' "vimwiki/doc/vimwiki.txt" -A 1000 > LICENCE
}

package() {
  cd vimwiki
  install -d ${pkgdir}/usr/share/vim/vimfiles/autoload/vimwiki
  install -m644 ${srcdir}/vimwiki/autoload/vimwiki/* \
    ${pkgdir}/usr/share/vim/vimfiles/autoload/vimwiki/
  install -d ${pkgdir}/usr/share/vim/vimfiles/{doc,ftplugin,plugin,syntax}
  install -m644 ${srcdir}/vimwiki/doc/vimwiki.txt \
    ${pkgdir}/usr/share/vim/vimfiles/doc/
  for x in {ftplugin,plugin,syntax}; do
    install -m644 ${srcdir}/vimwiki/$x/* \
      ${pkgdir}/usr/share/vim/vimfiles/$x/
  done
  install -Dm644 ${srcdir}/LICENCE \
    ${pkgdir}/usr/share/licenses/${pkgname}/LICENCE
}

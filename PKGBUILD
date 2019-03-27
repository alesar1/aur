# Maintainer:
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=arch-firefox-search
pkgver=0.8.2
pkgrel=8
pkgdesc="Firefox Arch search engines (AUR, Pkgs, BBS, Wiki, etc.)"
arch=('any')
url="http://archlinux.org/"
license=('GPL')
depends=("firefox")
replaces=('arch-firefox3-search')
source=(arch-bugs-fs.xml
	arch-bugs-t.xml
	arch-forum-a.xml
	arch-forum-c.xml
	arch-pkgs.xml
	arch-wiki.xml
	aur.xml)
md5sums=('df18835df1ea78bc3fc0e05f934b1e46'
         '0226a317c8bf23feaa80e21d1706f2d5'
         '4eaa3d26ac41077ee25b66127ad9ef0a'
         '2435c34ea6a012fe08a8d17a051e5f80'
         '403c346ce089ec56c2db67f9f3d87514'
         'dbb93d1e793b92252b69f65110b33c42'
         'bd0896ec148707b6980d23adc6015448')

package() {
#  _ffver=`pacman -Q firefox | cut -f2 -d\ | cut -f1 -d-`
#  depends=("firefox>=${_ffver}" "firefox<=${_ffver/0/99}")

  cd "${srcdir}"
  local _prefix="${pkgdir}"/usr/lib/firefox/distribution/searchplugins/common

  for i in ${source[@]}; do
    install -D -m 0644 "${srcdir}"/$i ${_prefix}/$i
  done
}

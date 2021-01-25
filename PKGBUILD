# Maintainer: Fatih Bostancı <ironic@yaani.com>

pkgname=ezanvakti
pkgver=7.4
pkgrel=1
pkgdesc="Islamic Prayer Times bash script for Turkish users"
arch=('any')
url="https://gitlab.com/fbostanci/ezanvakti"
license=('GPL3')
makedepends=()
# change curl to wget and ffmpeg to mplayer if wanted
# isteniyorsa curl yerine wget, ffmpeg yerine mplayer yazilabilir.
depends=('bash' 'yad' 'sed' 'gawk' 'grep' 'hicolor-icon-theme' 'libnotify' 'curl' 'ffmpeg')
optdepends=('bash-completion: completion for bash')
source=("https://github.com/fbostanci/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('89b19dfc3733ae9b7dbda80f86630d42')

package() {
  cd "$pkgname-$pkgver"
  make PREFIX=/usr sysconfdir=/etc DESTDIR="${pkgdir}" install
}

# vim:set ts=2 sw=2 et:

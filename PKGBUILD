# Maintainer: Elaina Martineau <elainamartineau@gmail.com>
pkgname=ttf-octicons
pkgver=13.0.0
pkgrel=1
pkgdesc="A scalable set of icons handcrafted with <3 by GitHub"
arch=('any')
license=('MIT')
url="https://octicons.github.com/"
makedepends=('git' 'nodejs' 'npm')
depends=('fontconfig' 'xorg-font-util' 'xorg-mkfontscale')
source=("https://github.com/primer/octicons/archive/v${pkgver}.tar.gz")
sha256sums=('74c22f92cf6bd5356292c6c86de51583b947c354d8a3ea77fb4ba7ede2d67663')
install=$pkgname.install

package() {
  cd "${srcdir}/octicons-${pkgver}"
  install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
  
  local npmdir=node_modules
  mkdir -p "$npmdir"
  npm install --prefix "$npmdir" fantasticon
  mkdir 'font'
  fantasticon icons -o font -t ttf -n octicons

  install -d $pkgdir/usr/share/fonts/TTF/
  install -m644 font/octicons.ttf $pkgdir/usr/share/fonts/TTF/
}

# Maintainer: Westofer Raymond <westoferraymond@gmail.com>

pkgname=ytfzf
pkgver=1.1.1
pkgrel=1
pkgdesc="A posix script to find and watch youtube videos from the terminal. (Without API)"
arch=('any')
url="https://github.com/pystardust/ytfzf"
license=('GPL')
depends=('jq' 'mpv' 'youtube-dl')
makedepends=() 
optdepends=('dmenu: use dmenu for search prompts and results'
						'rofi:  use rofi for search prompts and results'
						'fzf:   use fzf for results'
						'ueberzug: thumbnails image preview'
						)
provides=('ytfzf')
conflicts=("ytfzf-git")
install=
source=("https://github.com/pystardust/ytfzf/archive/v${pkgver}.tar.gz")
md5sums=('9f93942bc81e9cfbbcdba64a87c0cdfc')

package() {
	cd "$srcdir/${pkgname}-${pkgver}"
	make DESTDIR="$pkgdir/" install

}

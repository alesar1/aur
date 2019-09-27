# Maintainer: Brainfuck
# https://github.com/brainfucksec

_gitname=archtorify
pkgname=archtorify-git
pkgver=1.19.3
pkgrel=1
pkgdesc="Transparent proxy through Tor for Arch Linux"
arch=('any')
url="https://github.com/brainfucksec/archtorify/"
license=('GPL3')
depends=('tor')
makedepends=('git')
source=("git+https://github.com/brainfucksec/${_gitname}/")
md5sums=('SKIP')

package() {
	cd "$_gitname"

	install -Dm644 README.md $pkgdir/usr/share/doc/$_gitname/README.md
	install -Dm755 archtorify.sh $pkgdir/usr/bin/archtorify
    mkdir -p $pkgdir/usr/share/$_gitname/data
    mkdir -p $pkgdir/usr/share/$_gitname/backups
    install -Dm644 data/* $pkgdir/usr/share/$_gitname/data
}

# vim:set ts=2 sw=2

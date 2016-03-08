# Maintainer: Sébastien Lemaire
_pkgname=nctelegram
_gitname=ncTelegram
pkgname=${_pkgname}-git
pkgver=0.9.1
pkgrel=1
pkgdesc="A ncurse Telegram client developed in Python"
arch=('any')
url="https://github.com/Nanoseb/ncTelegram"
license=('GPL3')
depends=('python' 'telegram-cli-git' 'python-urwid')
makedepends=('git' 'python-distribute')
optdepends=(
'libnotify: library to display notifications'
'libcaca: library to display inline images'
'ttf-symbola: font for emoji'
)
conflicts=('nctelegram')
provides=('nctelegram')
source=("git+https://github.com/Nanoseb/ncTelegram.git")
md5sums=('SKIP')

package() {
	cd "$_gitname"
	python setup.py install --root=${pkgdir}
}

